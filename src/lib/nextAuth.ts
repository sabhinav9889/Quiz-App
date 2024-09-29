import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation';

export const authConfig: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ]
}

export var currUser:any;

export async function loginIsRequired() {
    const session = await getServerSession(authConfig);
    if(session?.user) currUser = session?.user;
    if(!session) redirect('/login');
}

export async function getUserDetails(){
    const session = await getServerSession(authConfig);
    console.log("getUser:",session?.user); 
    return session?.user;
}