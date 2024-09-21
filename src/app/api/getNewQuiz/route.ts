import { NextRequest, NextResponse } from "next/server";
import { strict_output } from "@/lib/openGpt";
export async function POST(req:NextRequest){
    try{
        const data = await req.json();
        const {topic, numberOfQuestions, type, score} = data;
        if(data==null){
            return new NextResponse("Invalid data", {status: 400});
        } 
        let questions:any;
        // if (type === "Open Ended") {
        //     questions = await strict_output(
        //       "You are a helpful AI that is able to generate a pair of question and answers, the length of each answer should not be more than 15 words, store all the pairs of answers and questions in a JSON array",
        //       new Array(Number(numberOfQuestions)).fill(
        //         `You are to generate a random hard open-ended questions about ${topic}`
        //       ),
        //       {
        //         question: "question",
        //         answer: "answer with max length of 15 words",
        //       }
        //     );
        //   } else if (type === "MCQ") {
        //     questions = await strict_output(
        //       "You are a helpful AI that is able to generate mcq questions and answers, the length of each answer should not be more than 15 words, store all answers and questions and options in a JSON array",
        //       new Array(Number(numberOfQuestions)).fill(
        //         `You are to generate a random hard mcq question about ${topic}`
        //       ),
        //       {
        //         question: "question",
        //         answer: "answer with max length of 15 words",
        //         option1: "option1 with max length of 15 words",
        //         option2: "option2 with max length of 15 words",
        //         option3: "option3 with max length of 15 words",
        //       }
        //     );
        //   }
        questions = await strict_output(topic);
        console.log("............................question",questions);
        return new NextResponse (questions);
    }
    catch(e){
        console.log(e);
        return new NextResponse("Error processing request", {status: 500});
    }
}