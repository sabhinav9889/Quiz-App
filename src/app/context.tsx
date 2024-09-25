"use client"
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

export const messageData = createContext<ValueProps| null>(null);
interface ques {
    topic: String;
    numberOfQuestions: String;
    type: String;
    score: Number;
}

interface questionI{
    question: string;
    answer: string;
    options: string[];
}

interface ValueProps{
    theme: boolean;
    setTheme: Dispatch<SetStateAction<boolean>>;
    newQuiz: ques ;
    setnewQuiz: Dispatch<SetStateAction<ques>>;
    questionSet: questionI[];
    setQuestionSet: Dispatch<SetStateAction<questionI[]>>;
    cursor: number;
    setCursor: Dispatch<SetStateAction<number>>;
    ans: number [];
    setAns: Dispatch<SetStateAction<number[]>>;
}



const Context: React.FC<{children: ReactNode}> = ({children}) => {
    const [theme, setTheme] = useState<boolean>(false);
    const [newQuiz, setnewQuiz] = useState<ques>({
        topic: '',
        numberOfQuestions: '',
        type: '',
        score: 0,
    });
    const [cursor, setCursor] = useState<number>(0);
    const [questionSet, setQuestionSet] = useState<questionI[]>([{
        question: '',
        answer: '',
        options: [],
    }]);
    const [ans, setAns] = useState<number[]>(new Array(21).fill(-1));
    const value1 : ValueProps = { theme, setTheme, newQuiz, setnewQuiz, questionSet, setQuestionSet, cursor, setCursor, ans, setAns};
    return(
        <messageData.Provider value={value1}>
            {children}
        </messageData.Provider>
    )
}

export default Context;