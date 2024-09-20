import run from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import {User, Question} from '@/models/user';
import { getUserDetails } from "@/lib/nextAuth";

export async function GET() {
    try{
        await run();
        return new NextResponse("connected");
    }
    catch(e){
        console.log(e);
        NextResponse.json({
            message: "Connection failed"
        },{
            status:500
        })
    }
}   

export async function POST(req: NextRequest) {
    try{
        await run();
        const postData = await req.json();
        const {newUser} = postData;
        if(!newUser){
            return NextResponse.json({
                message: "User not found",
            },{
                status:404
            });
        }
        const existingUser = await User.findOne(newUser);
        if(existingUser){
            return NextResponse.json({
                message: "User Exists",
            },{
                status:201
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
    }
}