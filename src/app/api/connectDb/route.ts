import run from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import {User, Question} from '@/models/user';

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

export async function POST(req: NextRequest, res: NextResponse) {
    try{
        await run();
        if(!req.body) return;
        const userData = await req.json();
        await User.create(req.body);
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