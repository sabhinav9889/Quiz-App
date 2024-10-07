"use client"
import { messageData } from "../context";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";  
import { useRouter, redirect } from "next/navigation";
// import { currUser } from "@/lib/nextAuth";
import { getUserDetails, currUser } from "@/lib/nextAuth";
import axios from "axios";
interface questionSet{
    question: string;
    answer: string;
    options: string[];
    len: number;
}
export default function Question({question, len}:any){
    const {theme, setTheme,  cursor, setCursor, newQuiz, ans, setAns} = useContext(messageData)!;
    const router = useRouter();
    const opt: string[] = ["A", "B", "C", "D"];
    const [score, setScore] = useState(0);
    const [hideScore, setHideScore] = useState(true);
    const n = len;
    const isMcq = true;
    const questionData = {
        totalQuestion: n,
        done : cursor+1,
    }
    const handleClick = (i:any)=>{
        let temp1 = [...ans];
        if(temp1[cursor]!=-1) return;
        temp1[cursor] = i;
        setAns(temp1);
        if(question?.options[i]==question?.answer) setScore((prev)=>prev+1);
        else setScore(score);
    }
    const handleSubmit = async()=>{
        // api call to save the result
        try{
            setHideScore(false);
            alert(currUser);
            // const temp = await getUserDetails();
            const data = {
                ...newQuiz
            }
            const res = await axios.post('/api/saveresult',data);
            console.log(res);
        }catch(e){
            console.log(e);
        }
    }
    const handleRetry = ()=>{
        setAns(ans.fill(-1));
        setScore(0);
        setCursor(0);
        setHideScore(true);
    }
    const handleNewQuiz = () =>{
        handleRetry();
        router.push('/readyquiz');
        redirect('/readyquiz');
    }
    return(
         <>
         <div className="xl:mr-80 xl:ml-80 md:ml-40 md:mr-40 sm:ml-20 sm:mr-20 ml-3 mr-3 flex justify-center select-none">
            <div className={`text-2xl font-semibold text-center p-2`}>
               {newQuiz.topic}
            </div>
         </div>
         <div className="xl:mr-80 xl:ml-80 md:ml-40 md:mr-40 sm:ml-20 sm:mr-20 ml-3 mr-3 flex justify-between select-none">
            <div className={`w-24 text-center rounded-md p-2 border ${(!theme)?'bg-white text-primary hover:shadow-destructive':'bg-primary text-secondary'}`}>
               {isMcq?'MCQ':'Open Read'}
            </div>
            <div className={`w-24 text-center rounded-md p-2 border ${(!theme)?'bg-white text-primary hover:shadow-destructive':'bg-primary text-secondary'}`}>
               {questionData.done +" / "+ questionData.totalQuestion}
            </div>
         </div>
         {(hideScore)?
         <div className={`h-[500px] sm:pr-14 sm:pl-14 pr-4 pl-4 mt-10 border xl:mr-80 xl:ml-80 rounded-lg md:ml-40 md:mr-40 sm:ml-20 sm:mr-20 ml-3 mr-3 hover:shadow-lg ${theme?'hover:shadow-destructive':''} font-bold`}>
            <p className="pt-2 text-xl leading-loose">{question?.question}</p>
            <div className="mt-4 h-[250px]">
                {
                    question?.options?.map((ele:any,i:any)=>(
                        <div key={i} className={`w-full rounded-xl border p-2 mt-4 cursor-pointer hover:shadow-md ${(ans[cursor]!=-1)?`bg-destructive`:''} ${(question.options[i]==question.answer&&ans[cursor]!=-1)?`bg-green-300`:''}`} onClick={()=>handleClick(i)}>{opt[i]+". "+ele}</div>
                    ))
                }
            </div>
            <div className="w-full flex justify-between mt-10">
                <div className={`p-2 pl-3 pb-8 w-10 h-10 cursor-pointer rounded-md border ${!theme?`border-black`:'border-white'} hover:shadow-lg`} onClick={()=>{if(cursor!=0){setCursor((prev)=>prev-1);}}}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <div className={`p-2 pl-3 pb-8 w-10 h-10 cursor-pointer rounded-md border ${!theme?`border-black`:'border-white'} hover:shadow-lg`} onClick={()=>{if(cursor!=n-1){setCursor((prev)=>prev+1);}}}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className="p-2 pl-3 h-10 w-20 border-black rounded-md border mt-4 cursor-pointer hover:shadow-lg" onClick={handleSubmit}>
                    Submit
                </div>
            </div>
         </div>:
          <div className="mt-8 xl:mr-80 xl:ml-80 md:ml-40 md:mr-40 sm:ml-20 sm:mr-20 ml-3 mr-3 text-center p-10">
            <p className="p-4 font-semibold text-xl">Your Total score is : {score}</p>
            <p className="p-4 font-semibold text-xl">Yor Accuracy is : {((score/len)*100).toFixed(2)} %</p>
            <div className="mt-12">
                <button className="p-2 border rounded-lg font-semibold" onClick={()=>handleRetry()}>Retry</button>
                <button className="p-2 border rounded-lg ml-2 font-semibold" onClick={()=>handleNewQuiz()}>New Quiz</button>
            </div>
           </div>
          }
         </>
    )
}