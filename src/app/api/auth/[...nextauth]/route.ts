import NextAuth from 'next-auth'
import { authConfig } from '@/lib/nextAuth';

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST};