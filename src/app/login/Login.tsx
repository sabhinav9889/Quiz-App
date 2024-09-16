"use client"
import { description } from "@/app/constant";
import { Button } from "../../components/ui/button";
import { useContext } from "react";
import { appName } from "@/app/constant";
import Nav from "../nav/Nav";
import React from "react";
import { messageData } from "../context";
import {signIn} from 'next-auth/react';

const Home = ()=>{
    const {theme, setTheme} = useContext(messageData)!;
    setTheme(localStorage.getItem('theme')=='dark'?true:false);
    const handleSubmit = ()=>{
      signIn("google");
    }
    return(
        <div className={`${theme?'bg-blackBg text-white':'bg-white text-black'} min-h-screen`}>
         <Nav isLoginPage={true}/>
         <div className="w-full flex justify-center p-8">
            <h1 className="lg:text-5xl md:text-3xl">Welcome to {appName}</h1>
         </div>
         <div className="w-full flex justify-center mt-12">
            <div className="w-1/2 md:p-10 md:text-2xl text-gray-400">
              {description}
            </div>
          </div>
          <div className="w-full flex justify-center mt-10">
            <Button variant={`${(theme)?"secondary":"default"}`} onClick={()=>handleSubmit()}>Login in with Google</Button>
          </div>
        </div>
    )
}

export default Home;