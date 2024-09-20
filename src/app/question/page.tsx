"use client"
import Nav from "../nav/Nav";
import { messageData } from "../context";
import { useContext, useState } from "react";
export default function Question(){
    const {theme,setTheme} = useContext(messageData)!;
    const question =  "What we are going to do if some natural disaster comes immediatley ?";
    const lis: string[] = ["Option A", "Option B", "Option C", "Option D"];
    const opt: string[] = ["A", "B", "C", "D"];
    const [ans, setAns] = useState(-1);
    const isMcq = true;
    const questionData = {
        totalQuestion: 20,
        done : 12,
    }
    return(
        <div className={`${theme?'bg-blackBg text-white':'bg-white text-black'} min-h-screen`}>
         <Nav isLoginPage={false}/> 
         <div className="mt-8 xl:mr-80 xl:ml-80 md:ml-40 md:mr-40 sm:ml-20 sm:mr-20 ml-3 mr-3 flex justify-between">
            <div className={`w-24 text-center rounded-md p-2 border ${(!theme)?'bg-white text-primary hover:shadow-destructive':'bg-primary text-secondary'}`}>
               {isMcq?'MCQ':'Open Read'}
            </div>
            <div className={`w-24 text-center rounded-md p-2 border ${(!theme)?'bg-white text-primary hover:shadow-destructive':'bg-primary text-secondary'}`}>
               {questionData.done +" / "+ questionData.totalQuestion}
            </div>
         </div>
         <div className={`h-[500px] sm:pr-14 sm:pl-14 pr-4 pl-4 mt-10 border xl:mr-80 xl:ml-80 rounded-lg md:ml-40 md:mr-40 sm:ml-20 sm:mr-20 ml-3 mr-3 hover:shadow-lg ${theme?'hover:shadow-destructive':''} font-bold`}>
            <p className="pt-2 text-2xl leading-loose">{question}</p>
            <div className="mt-4">
                {
                    lis.map((ele,i)=>(
                        <div key={i} className={`w-full rounded-xl border p-2 mt-4 cursor-pointer hover:shadow-md ${i==ans?`${theme?`bg-destructive text-white`:'bg-green-900 text-white'}`:''}`} onClick={()=>setAns(i)}>{opt[i]+". "+ele}</div>
                    ))
                }
            </div>
         </div>
        </div>
    )
}