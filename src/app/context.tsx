"use client"
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

export const messageData = createContext<ValueProps| null>(null);
interface ques {
    topic: String;
    numberOfQuestions: String;
    type: String;
    score: Number;
}
interface ValueProps{
    theme: boolean;
    setTheme: Dispatch<SetStateAction<boolean>>;
    newQuiz: ques ;
    setnewQuiz: Dispatch<SetStateAction<ques>>;
}

const Context: React.FC<{children: ReactNode}> = ({children}) => {
    const [theme, setTheme] = useState<boolean>(false);
    const [newQuiz, setnewQuiz] = useState<ques>({
        topic: '',
        numberOfQuestions: '',
        type: '',
        score: 0,
    });
    const value1 : ValueProps = { theme, setTheme, newQuiz, setnewQuiz};
    return(
        <messageData.Provider value={value1}>
            {children}
        </messageData.Provider>
    )
}

export default Context;