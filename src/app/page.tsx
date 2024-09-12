"use client"
import { Button } from "@/components/ui/button";
// import HomePage from './login/page';
import { redirect } from "next/navigation";

export default function Home() {
  redirect('/login');
  return(
    <div className={`min-h-screen`}>
    </div>
  )
}