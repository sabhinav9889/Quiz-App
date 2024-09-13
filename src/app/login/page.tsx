import Login from './Login';
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/nextAuth";
import { redirect } from 'next/navigation';
export default async function(){
    const session = await getServerSession(authConfig);
    if(session){
        redirect('/dashboard');
    }
    return(
        <>
         <Login/>
        </>
    )
}