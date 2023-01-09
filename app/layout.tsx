import Navbar from '../components/Navbar/Navbar';
import './globals.css';
import { Comfortaa, Varela_Round } from '@next/font/google';
import { SessionProvider } from 'next-auth/react';
const font = Varela_Round({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className={font.className + ' flex'}>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
