import nextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {
        email: {label: 'Email', type:'email', placeholder:'john@email.com'},
        password: {label: 'Password', type:'password'}
      },
     
      authorize(credentials, req) {
        console.log('user trying to auth', {credentials, req});
        
        
        const {email, password} = credentials as {
            email: string;
            password: string;
        };
        // if (email === 'a@a.b') {
        //     return {email} as User;
        // }
        throw new Error('Hey! thanks for trying out my log-in page, i am still working on things but one day it should work :D ');
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
