import Logo from "@/components/Logo";
import { useContext, useState } from "react";
import { messageData } from "../../app/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import  {setTheme1, toggleTheme} from '@/lib/theme';
export default function({isLoginPage}:any){
    const {theme, setTheme} = useContext(messageData)!;
    const Logout = ()=>{
        alert("ouT");
        signOut();
        redirect('/login');
    }
    return(
        <>
         <nav className={`flex h-14`}>   
            <Logo theme={theme}/>
            <div className="mt-3 h-6">
                <div className={`absolute  md:right-28 right-36 w-16 h-7 rounded-full border flex ${(theme)?'bg-black border-whiteTheme ':'bg-white border-blackTheme'} cursor-pointer`} onClick={()=>{setTheme((prev)=>(prev)?false:true); toggleTheme();}}>
                    {(!theme)&&<FontAwesomeIcon icon={faMoon} className="mt-0.5 ml-2 text-black text-lg"/>}
                    <div className={`rounded-full mt-0.5 w-5 h-5 ${(!theme)?'translate-x-4 bg-black':'translate-x-1 bg-white'} duration-300 ease-in-out`}>
                    </div>
                    {(theme)&&<FontAwesomeIcon icon={faSun} className="ml-4 mt-0.5 text-lg text-orange-300"/>}
                </div>
            </div>
            {(isLoginPage)?<div className="absolute right-4 mt-2"><Button variant={`${(theme)?"secondary":"default"}`}>Login</Button></div>:<div className={`rounded-full w-11 h-11 ${theme?'bg-secondary text-primary':'bg-primary text-secondary'} absolute right-4 mt-1 text-lg pt-2 pl-3.5 cursor-pointer font-bold`} onClick={()=>Logout()}>
                P
            </div>}
        </nav>
        <hr className="" />
        </>
    )
}