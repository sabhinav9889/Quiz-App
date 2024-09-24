"use client"

import Question from "./Question";
import { useContext, useState } from "react";
import { messageData } from "../context";
import Score from "../score/Score";
import Nav from "../nav/Nav";
interface questionI{
    question: string;
    answer: string;
    options: string[];
}
 const Quiz = ()=>{
    const context = useContext(messageData);
    const {theme, setTheme, questionSet, cursor} = context!;
    
    let question1: questionI = {
        question: questionSet[cursor].question,
        answer: questionSet[cursor].answer,
        options: questionSet[cursor].options,
    };
    // if(questionSet.length&& questionSet&&'question') question.question = questionSet[count].question;
    return(
        <div className="select-none">
            <div className={`${theme?'bg-blackBg text-white':'bg-white text-black'} min-h-screen`}>
               <Nav isLoginPage={false}/> 
               <Question question={question1} len={questionSet.length}/>
            </div>
        </div>
    )
};
export default Quiz;