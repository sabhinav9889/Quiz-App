"use client"

import Question from "./Question";
import { useContext, useEffect, useState } from "react";
import { messageData } from "../context";
import Nav from "../nav/Nav";
import { redirect } from "next/navigation";
interface questionI{
    question: string;
    answer: string;
    options: string[];
}
 const Quiz = ()=>{
    const context = useContext(messageData);
    const {theme, setTheme, newQuiz, questionSet, setQuestionSet, cursor} = context!;
    const [load, setLoad]  = useState(false);
    if(questionSet[0].question.length==0) redirect('/readyquiz');
    let question1: questionI = {
        question: questionSet[cursor].question,
        answer: questionSet[cursor].answer,
        options: questionSet[cursor].options,
    };
    // if(questionSet.length&& questionSet&&'question') question.question = questionSet[count].question;
    return(
        <>
            {(load)?
                <div className="w-full min-h-screen animate-pulse">
                </div>
            :
            <div className="select-none">
                <div className={`${theme?'bg-blackBg text-white':'bg-white text-black'} min-h-screen`}>
                <Nav isLoginPage={false}/> 
                <Question question={question1} len={questionSet.length}/>
                </div>
            </div>}
        </>
    )
};
export default Quiz;