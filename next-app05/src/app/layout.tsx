import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import "./globals.css";

import Header from '@/components/Header';

import Head from 'next/head';
import Script from 'next/script';

export default function RootLayout({ children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <Head>
        <Script src='bootstrap/dist/js/bootstrap.min.js' />
      </Head>
      <body>
        <Header appTitle='Address Book 1.0' />
        <div className='container-fluid p-4'>
          {children}
        </div>
      </body>
    </html>
  );
}
