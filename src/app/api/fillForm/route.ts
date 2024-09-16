import { Question } from "@/models/user";
import { NextRequest, NextResponse } from "next/server";


export default async function POST(req:NextRequest){
    try{
        if(!req.body) return;
        const { topic, numberOfQuestions, type, score, date}  = await req.json();
        await Question.create({
            topic,
            numberOfQuestions,
            type,
            score,
            Date
        });
    }catch(e){
        console.log(e);
        NextResponse.json({
            status: 500,
            message: "An error occurred"
        });
    }
}