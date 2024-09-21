"use client"
import { messageData } from "../context";
import History from "@/components/Dashboard/DownCards";
import NewQuiz from "@/components/Dashboard/NewQuiz";
import RecentQuiz from "@/components/Dashboard/RecentQuiz";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import {data} from '../constant';
import Nav from "../nav/Nav";
const Dashboard = ()=>{
    const {theme, setTheme} = useContext(messageData)!;
    const router = useRouter();
      type Props = {
        formattedTopics: { text: string; value: number }[];
      };
      const handleNewQuiz = ()=>{
        const temp = localStorage.getItem('theme')=='dark'?true:false;
        setTheme(temp);
        router.push('/readyquiz');
      }
    return(
        <div className={`${theme?'bg-blackBg text-white':'bg-white text-black'} min-h-screen w-full select-none`}>
            <Nav isLoginPage={false}/>
            <h1 className="text-xl lg:text-3xl mt-6 font-bold pl-8 pr-8">DashBoard</h1>    
            <div className="flex justify-center w-full pl-8 pr-8">
                    <div className="md:flex justify-between w-full">
                      <div onClick={()=>handleNewQuiz()} className={`border mt-6 md:w-[47%] cursor-pointer h-32 font-bold  rounded-lg ${theme?'border-white hover:shadow-destructive':'border-black'} pt-4 pl-4 hover:shadow-lg`}>
                        <NewQuiz theme={theme}/>
                      </div>
                      <div className={`border mt-6 md:w-[47%] h-32 cursor-pointer font-bold rounded-lg ${theme?'border-white hover:shadow-destructive':'border-black'} pt-4 pl-4 hover:shadow-lg`}>
                        <RecentQuiz theme={theme}/>
                      </div>
                    </div>
            </div>
            <History data={data} theme={theme} />
        </div>  
    )
}

export default Dashboard;