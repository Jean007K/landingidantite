import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://emverax.com'),
  title: 'Emverax - Verificación de Identidad Digital y Firma Electrónica',
  description: 'Soluciones de verificación de identidad digital, biometría facial, firma de contratos y registro de asistencia para Fintechs y empresas.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://emverax.com',
    siteName: 'Emverax',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Emverax - Verificación Digital',
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable}`}>
      <body className="flex min-h-screen flex-col font-sans antialiased text-gray-900 bg-white">
        <Script
          src="https://umami.genbia.qzz.io/script.js"
          data-website-id="c80ac460-9c14-4905-9c1e-925093fdbfb6"
          strategy="afterInteractive"
        />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
