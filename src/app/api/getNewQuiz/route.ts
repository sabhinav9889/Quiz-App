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
        let lis: Object[] =  new Array();
        let promt = `You are an AI assistant capable of generating multiple-choice questions (MCQs) along with answers and options in JSON format. The questions should be related to the topic ${topic}. Each answer should not exceed 15 words in length. The total number of questions should equal ${numberOfQuestions}. The JSON array should include the following structure for each question:
               question: 'The question text'
               options: ['Option 1', 'Option 2', 'Option 3', 'Option 4']
               answer: 'Correct answer (from one of the options)'
               Ensure that the correct answer is clearly indicated in the answer field and matches one of the provided options`
        questions = await strict_output(promt);
        const res = questions?.choices[0].message.content;
        let temp = '', i = 0;
        while(i<res.length&&res[i]!='`'){
            i++;
        }
        while(i<res.length) temp += res[i++];
        const result = temp.replaceAll('`','').substring(5, temp.length);
        console.log("Result array: ", result);
        return new NextResponse (result);
    }
    catch(e){
        console.log(e);
        return new NextResponse("Error processing request", {status: 500}); 
    }
}