"use client"
import { useContext, useState } from "react";
import { messageData } from "../context";
import { Button } from "@/components/ui/button";
import Nav from '../nav/Nav';
export default function Quiz(){
  const {theme,setTheme} = useContext(messageData)!;
  setTheme(localStorage.getItem('theme')=='dark'?true:false);
  const [tab, setTab] = useState(true);
  const [topic, setTopic] = useState("");
  const [ques, setQues] = useState("");
  const handleSubmit = ()=>{
    // handle submit logic here
    localStorage.setItem('theme',(theme)?'dark':'light');
    const quesData = {
      topic: topic,
      numberOfQuestions: ques,
      type: (tab)?'MCQ':'Open Read',
      score: 0
    }
  }
  return(
    <div className={`${theme?'bg-blackBg text-white':'bg-white text-black'} min-h-screen`}>
      <Nav isLoginPage={false}/> 
     <form onSubmit={handleSubmit}>
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
     </form>
    </div>
  )
}