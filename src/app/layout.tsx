import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { SessionProvider } from 'next-auth/react';
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Lettuno',
  description:
    'Deixe que nós prucuramos livroas para você. Assine nossa plataforma e receba todos os meses um ebook novo.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${geistSans.variable}  antialiased`}>
        <SessionProvider>
          {children}
        </SessionProvider>

        <Toaster />
      </body>
    </html>
  );
}
