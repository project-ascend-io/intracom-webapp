import type { Metadata } from 'next';
import { AuthProvider } from '@/context/auth';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Intracom',
  description: 'Intracom is an open-source communication tool designed to empower teams and highlight the skills of talented engineers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </AuthProvider>
  );
}
