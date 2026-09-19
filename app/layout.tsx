import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import { DM_Serif_Display, Outfit } from 'next/font/google';
import { site } from '@/lib/content';
import './globals.css';

// Soft, elegant fonts (self-hosted at build time by next/font)
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-outfit',
  display: 'swap',
});

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-dm-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.ogDescription,
    url: site.url,
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSerif.variable}`}>
      <body className="min-h-screen font-sans antialiased p-4 md:p-8 lg:p-12 overflow-x-hidden">
        {children}

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${site.gaId}');
          `}
        </Script>
      </body>
    </html>
  );
}
