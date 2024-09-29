import { NextRequest, NextResponse } from "next/server";
import {User, Question} from '@/models/user';
import { getUserDetails } from "@/lib/nextAuth";
import { use } from "react";

export async function POST(req:NextRequest){
    try{
        const postData = await req.json();
        console.log(postData);
        const {topic, numberOfQuestions, type, score} = postData;
        const user = await getUserDetails();
        console.log("user.........................................................................",user);
        // topic: { type: String, required: true },
        // numberOfQuestions: { type: Number, required: true },
        // type: { type: String, required: true, enum: ['mcq', 'open_ended']},
        // score: { type: Number, required: true},
        // date: Date,
        // Perform validation and save user data to the database
        const quizSession = {
            topic,
            numberOfQuestions,
            type,
            score,
            date: new Date()
        };
        const userDetails = await User.findOne(user);
        if(!userDetails){
            return NextResponse.json({message:"User not found",status:404});
        }
        // console.log("quiz................................................................................",quizSession);
        userDetails.history?.push(quizSession);
        await userDetails.save();
        // console.log("res................................................................................",res);
        return NextResponse.json({message:"Result saved success",status:200});
    }
    catch(e){
        return NextResponse.json({message:"Internal server Error",status:500});
    }
}