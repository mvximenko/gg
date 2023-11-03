import Header from '@/app/_components/header';
import Footer from '@/app/_components/footer';
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
      <body className={inter.className + ' flex flex-col min-h-screen'}>
        <Header />
        <main className='container mx-auto grow mt-24'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
