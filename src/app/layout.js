import Header from '@/app/_components/header';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'GG',
  description: 'GG is a service designed to help users discover games',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />

        {children}
      </body>
    </html>
  );
}
