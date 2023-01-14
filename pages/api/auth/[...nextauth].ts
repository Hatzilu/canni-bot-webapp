import nextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient, User } from '@prisma/client'
const prisma = new PrismaClient(); 

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {
        email: {label: 'Email', type:'email', placeholder:'john@email.com'},
        password: {label: 'Password', type:'password'}
      },
     
      async authorize(credentials, req) {

        const {email, password} = credentials as User;

        if (!email || !password) {
          throw new Error('Invalid form, missing email or password');
        }

        console.log(`user ${email} trying to auth`);
        
        const user = await prisma.user.findFirst({
          where: {
            email: email,
            password: password,
          }
        })    

        
        if (!user) {
          throw new Error('This user does not exist.');
        }
        console.log(`found user from db: `, user.id);
        
        return user;
      }
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/signin'
  },
};
export default nextAuth(authOptions);
