"use client"
import { Button } from "@/components/ui/button";
import HomePage from '../components/ui/home';
import { messageData } from "./context";
import React, { useContext } from "react";

export default function Home() {
  const context = useContext(messageData);
  const { theme, setTheme } = context!;
  return(
    <div className={`${theme?'bg-black text-white':'bg-white text-black'} min-h-screen`}>
      <HomePage/>
    </div>
  )
}