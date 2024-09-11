"use client"
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

export const messageData = createContext<ValueProps| null>(null);

interface ValueProps{
    theme: boolean;
    setTheme: Dispatch<SetStateAction<boolean>>;
}

const Context: React.FC<{children: ReactNode}> = ({children}) => {
    const [theme, setTheme] = useState<boolean>(false);
    const value1 : ValueProps = { theme, setTheme};
    return(
        <messageData.Provider value={value1}>
            {children}
        </messageData.Provider>
    )
}

export default Context;