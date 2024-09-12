"use client"
import { useContext } from "react";
import { messageData } from "../context";
import QuizCard from "@/components/Dashboard/UpperCards";
import History from "@/components/Dashboard/DownCards";
import Nav from "../nav/Nav";
const Dashboard = ()=>{
    const {theme, setTheme} = useContext(messageData)!;
    const lis:string[] = ["AI", "Machine Learning", "Python", "Promt", "AR/VR", "Visual", "DevOps", "TypeScript", "Airospace", "Datascience"];
    const data = [
        { text: 'Hey', value: 10 },
        { text: 'lol', value: 100 },
        { text: 'Hedsy', value: 130 },
        { text: 'lowewel', value: 120 },
        { text: 'firession', value: 100 },
        { text: 'vool', value: 10 },
        { text: 'ddsesk', value: 1 },
        { text: 'very cool', value: 1001 },
        { text: 'duck', value: 103 },
        { text: 'Hedsy', value: 10300 },
        { text: 'lowewel', value: 10100 },
        { text: 'firession', value: 50 },
        { text: 'vool', value: 70 },
        { text: 'ddsesk', value: 177 },
      ];
      type Props = {
        formattedTopics: { text: string; value: number }[];
      };
      
  const fontSizeMapper = (word: { value: number }) => Math.log2(word.value) * 5 + 16;
    return(
        <div className={`${theme?'bg-blackBg text-white':'bg-white text-black'} min-h-screen w-full`}>
            <Nav isLoginPage={false}/>
            <h1 className="text-xl lg:text-3xl mt-6 font-bold pl-8 pr-8">DashBoard</h1>
            <QuizCard theme={theme}/>
            <History data={data} theme={theme} />
        </div>  
    )
}

export default Dashboard;