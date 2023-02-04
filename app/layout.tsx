import Navbar from '../components/Navbar/Navbar';
import './globals.css';
import { Varela_Round } from '@next/font/google';
import ProvidersWrapper from '../components/ProvidersWrapper/ProvidersWrapper';
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
        <ProvidersWrapper>
          <div className={`${font.className} flex overflow-hidden`}>
            <Navbar />
            <div className="max-h-screen flex-1 overflow-auto">{children}</div>
          </div>
        </ProvidersWrapper>
      </body>
    </html>
  );
}
