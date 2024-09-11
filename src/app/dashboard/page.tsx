"use client"
import { appName } from "../constant";
import Logo from "@/components/ui/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { messageData } from "../context";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import WordCloud from 'react-d3-cloud';
const Dashboard = ()=>{
    const {theme, setTheme} = useContext(messageData)!;
    const lis:string[] = ["AI", "Machine Learning", "Python", "Promt", "AR/VR", "Visual", "DevOps", "TypeScript", "Airospace", "Datascience"];
    const data = [
        { text: 'Hey', value: 1000 },
        { text: 'lol', value: 200 },
        { text: 'first impression', value: 800 },
        { text: 'very cool', value: 100 },
        { text: 'duck', value: 10 },
      ];
    return(
        <div className={`${theme?'bg-black text-white':'bg-white text-black'} min-h-screen w-full`}>
            <nav className={`flex ${theme?'bg-blackTheme':'bg-whiteTheme'} h-14`}>
                <Logo/>
                <div className="mt-3 h-6">
                    <div className={` absolute  md:right-28 right-36 w-16 h-7 rounded-full border flex ${(theme)?'bg-black border-whiteTheme ':'bg-white border-blackTheme'} cursor-pointer`} onClick={()=>setTheme((prev)=>(prev)?false:true)}>
                        {(!theme)&&<FontAwesomeIcon icon={faMoon} className="mt-0.5 ml-2 text-black text-lg"/>}
                        <div className={`rounded-full mt-0.5 w-5 h-5 ${(!theme)?'translate-x-4 bg-black':'translate-x-1 bg-white'} duration-300 ease-in-out`}>
                        </div>
                        {(theme)&&<FontAwesomeIcon icon={faSun} className="ml-4 mt-0.5 text-lg text-orange-300"/>}
                    </div>
                </div>
                <div className={`rounded-full w-11 h-11 bg-zinc-400 absolute right-4 mt-1 text-lg pt-2 pl-3.5 cursor-pointer`}>
                    P
                </div>
            </nav>
            <div>
                <h1 className="text-xl lg:text-3xl mt-6 font-bold">DashBoard</h1>
                <div className="flex justify-center w-full pl-8 pr-8">
                    <div className="flex justify-between w-full">
                        <div className={`mt-6 w-[47%] cursor-pointer h-32 font-bold  rounded-lg ${theme?'bg-blackTheme':'bg-whiteTheme'} pt-4 pl-4`}>
                            <p className="text-xl lg:text-3xl mb-6">Ready For Quiz!</p>
                            <p>Read a topic and start a new quiz</p>
                        </div>
                        <div className={`mt-6 w-[47%] h-32 font-bold rounded-lg ${theme?'bg-blackTheme':'bg-whiteTheme'} pt-4 pl-4`}>
                            <p className="text-xl lg:text-3xl mb-6">Attempted Quiz</p>
                            <p>Start from previously attempted quiz</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full pl-8 pr-8 mt-2">
                    <div className="flex justify-between w-full h-80">
                        <div className={`mt-6 w-[47%] cursor-pointer font-bold  rounded-lg ${theme?'bg-blackTheme':'bg-whiteTheme'} pt-4 pl-4`}>
                        <p className="text-xl lg:text-3xl">Hot Topics</p>
                        <div className="flex justify-center mb-4 h-60 w-full">
                          <WordCloud data={data} height={550}/>
                        </div>
                        </div>
                        <div className={`mt-6 w-[47%] font-bold rounded-lg ${theme?'bg-blackTheme':'bg-whiteTheme'} pt-4 pl-4`}>
                        <p className="text-xl lg:text-3xl mb-6">Recent Activity</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Dashboard;