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
        try {

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
        catch(e) {
          console.log(e)
          throw new Error('Internal server error. Please try again later.')
        }
        
      }
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/signin'
  },
  secret: process.env.NEXT_PUBLIC_SECRET, // I dunno why neither the docs nor the tutorials cover this, but if you don't set the secret property here, you will get the CLIENT_FETCH_ERROR with nextAuth in the production build.
  callbacks: {
    async session({ session }) { 
      
      /**
       * by default nextAuth returns a basic user object and that kinda sucks cuz i have some more data i wanna return
       * from the DB, so i use the session callback here to connect to my DB real quick and send more properties 
       * to the session object.
       * see https://next-auth.js.org/configuration/callbacks#session-callback
       *  */ 
      if (!session?.user) return session;
      try {
        const userFromDB = await prisma.user.findFirst({
          where: {
            email: session.user.email,
          },
          select: { //select specific fields to return, we don't want to return any sensitive data the frontend doesn't need.
            email: true,
            id: true,
            image: true,
            emailVerified: true,
            name: true,
          }
        });
        if (!userFromDB) return session;

        session.user = userFromDB;
      }
      catch (e) {
        console.log('failed to read from DB, ',e);  
      }
      return session;
    }
  }
};
export default nextAuth(authOptions);
