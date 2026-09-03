import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://emverax.com'),
  title: 'Emverax - Verificación de Identidad Digital y Firma Electrónica',
  description: 'Soluciones de verificación de identidad digital, biometría facial, firma de contratos y registro de asistencia para Fintechs y empresas.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable}`}>
      <body className="flex min-h-screen flex-col font-sans antialiased text-gray-900 bg-white">
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
