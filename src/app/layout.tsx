import type { Metadata } from 'next';
import './globals.scss';
import Navbar from '@/components/Navbar';
import { Comfortaa } from 'next/font/google';
import Footer from '@/components/Footer';
import GlobalToast from '@/components/GlobalToast';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={comfortaa.className}>
        <NextIntlClientProvider messages={messages}>
          <main className="h-full flex flex-col">
            <Navbar />
            <div className="flex-grow">{children}</div>
            <Footer />
            <GlobalToast />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
