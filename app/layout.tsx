import type { Metadata } from 'next';
import { Instrument_Serif, Manrope } from 'next/font/google';
import './globals.css';
import { SmoothScroll } from '@/components/SmoothScroll';

const instrumentSerif = Instrument_Serif({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-instrument',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Life Coach London Central London 1:1 | Kasia Siwosz',
  description: 'Life coach london for ambitious professionals in Central London with measurable results and clear momentum | Kasia Siwosz',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} ${instrumentSerif.variable} font-sans antialiased bg-[#FAF8F5] text-[#1A1A1A]`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
