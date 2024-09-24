"use client"
import { useContext, useState } from "react";
import { messageData } from "../context";
import { Button } from "@/components/ui/button";
import Nav from '../nav/Nav';
import axios, {AxiosError} from "axios";
import { useRouter } from "next/navigation";
import { data } from "../constant";
export default function Quiz(){
  const {theme,setTheme, questionSet, setQuestionSet} = useContext(messageData)!;
  const [tab, setTab] = useState(true);
  const [topic, setTopic] = useState("");
  const [ques, setQues] = useState("");
  const [response, setResponse] = useState(null);
  const router  = useRouter();
  const handleSubmit = async(e: any)=>{
    // handle submit logic here
    e.preventDefault(); // Prevent the default form submit behavior (page reload)
    const temp = localStorage.getItem('theme')=='dark'?true:false;
    setTheme(temp);
    const quesData = {
      topic: topic,
      numberOfQuestions: ques,
      type: (tab)?'MCQ':'Open Ended',
      score: 0
    }
    const res = await axios.post("http://localhost:3000/api/getNewQuiz", quesData);
    console.log("questions: ",res.data);
    if(ques){ setQuestionSet(res.data); router.push('/question')}
    // setResponse(res.data);
  }
  return(
    <div className={`${theme?'bg-blackBg text-white':'bg-white text-black'} min-h-screen`}>
      <Nav isLoginPage={false}/> 
    {(!response)? <form onSubmit={handleSubmit}>
      <div className={`sm:pr-14 sm:pl-14 pr-4 pl-4 mt-14 border xl:mr-80 xl:ml-80 rounded-lg md:ml-40 md:mr-40 sm:ml-20 sm:mr-20 ml-3 mr-3 hover:shadow-lg ${theme?'hover:shadow-destructive':''} shadow-sm`}>
          <div className={`w-full rounded-md`}> 
            <p className="w-full flex justify-center mt-4 p-4 font-bold text-lg">Quizify</p>
            <p className="mt-8 ml-1/2">Enter Topic</p>
            <div className="w-full mt-1 flex justify-center">
              <input type="text" value={topic} required onChange={(e)=>setTopic(e.target.value)} className={`${theme?'bg-blackBg text-white':'bg-white text-black'} w-full p-4 h-10 border rounded-md`} placeholder="Enter topic"/>
            </div>
            <p className="ml-1/2 mt-7">Enter Number of questions</p>
            <div className="w-full flex justify-center pt-4">
              <input type="number" min="0" value={ques} onChange={(e)=>setQues(e.target.value)} required className={`${theme?'bg-blackBg text-white':'bg-white text-black'} w-full p-4 h-10 border rounded-md`} placeholder="Numer of question"/>
            </div>
            <p className="ml-1/2 mt-8">Select one b/w MCQ and Open Read</p>
            <div className="w-full flex mt-3 bg-destructive rounded-lg p-3 font-bold">
              <div className={`w-1/2 text-center ${tab?'bg-blackBg text-white':'bg-destructive'} p-2 rounded-lg cursor-pointer`} onClick={()=>setTab(true)}>MCQ</div> <div className={`w-1/2 text-center ${!tab?'bg-blackBg text-white':'bg-destructive'} p-2 rounded-lg cursor-pointer`} onClick={()=>setTab(false)}>Open Read</div>
              {/* <Button variant={`${!tab?'destructive':'default'}`}  >MCQ</Button> <Button variant={`${tab?'destructive':'default'}`} >Open Read</Button> */}
            </div>
            <div className="w-full flex justify-center pt-4 pb-16 h-14 mt-12">
              <Button variant={`${theme?'secondary':'default'}`} className="w-32">Submit</Button>
            </div>
          </div>
      </div>
     </form>:<>{response}</>}
    </div>
  )
}