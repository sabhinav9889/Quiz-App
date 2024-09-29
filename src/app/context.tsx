"use client"
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

export const messageData = createContext<ValueProps| null>(null);
interface ques {
    topic: string;
    numberOfQuestions: number;
    type: string;
    score: number;
}

interface questionI{
    question: string;
    answer: string;
    options: string[];
}

interface user{
    name: string;
    email: string;
    image?: string;
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
    currUser: user;
    setCurrentUser: Dispatch<SetStateAction<user>>;
}



const Context: React.FC<{children: ReactNode}> = ({children}) => {
    const [theme, setTheme] = useState<boolean>(false);
    const [newQuiz, setnewQuiz] = useState<ques>({
        topic: '',
        numberOfQuestions: 0,
        type: '',
        score: 0,
    });
    const [cursor, setCursor] = useState<number>(0);
    const [questionSet, setQuestionSet] = useState<questionI[]>([{
        question: '',
        answer: '',
        options: [],
    }]);
    const [ans, setAns] = useState<number[]>(new Array(51).fill(-1));
    const [currUser, setCurrentUser] = useState<user>({
        name: '',
        email: '',
        image: '',
    });
    const value1 : ValueProps = { theme, setTheme, newQuiz, setnewQuiz, questionSet, setQuestionSet, cursor, setCursor, ans, setAns, currUser, setCurrentUser};
    return(
        <messageData.Provider value={value1}>
            {children}
        </messageData.Provider>
    )
}

export default Context;