import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation';
import { signOut } from "next-auth/react";

export const authConfig: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ]
}

export async function loginIsRequired() {
    const session = await getServerSession(authConfig); 
    console.log("Session",session?.user);
    if(!session) redirect('/login');
}