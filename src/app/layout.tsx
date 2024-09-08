import type { Metadata } from 'next';
import './globals.scss';
import Navbar from '@/components/Navbar';
import { Comfortaa } from 'next/font/google';

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-comfortaa',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'WearIt',
  description: 'Urban clothing e-commerce site',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>
        <main>
          <Navbar />
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
