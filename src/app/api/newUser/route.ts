import run from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import {User, Question} from '@/models/user';
import { getUserDetails } from "@/lib/nextAuth";
import { error } from "console";

export async function GET() {
    try{
        await run();
        return new NextResponse("connected");
    }
    catch(e){
        console.log(e);
        return NextResponse.json({ error: 'Connection failed' }, { status: 500 })
    }
}   

export async function POST(req: NextRequest) {
    try{
        await run();
        const postData = await req.json();
        const {newUser} = postData;
        if(!newUser){
            return NextResponse.json({
                error: "Bad request",
            },{
                status:400
            });
        }
        const existingUser = await User.findOne(newUser);
        if(existingUser){
            return NextResponse.json({
                error: "Conflict",
            },{
                status: 409
            });
        }
        await  User.create(newUser);
        return NextResponse.json({
            message: "User created",
        },{
            status:201
        });
    }
    catch(e){
        console.log(e);
        return NextResponse.json({ error: 'Internal Server error' }, { status: 500 });
    }
}