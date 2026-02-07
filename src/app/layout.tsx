import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'AGCP Farmaceuticos - Pharmaceutical Nanotechnology Platform',
    template: '%s | AGCP Farmaceuticos - Pharmaceutical Nanotechnology',
  },
  description:
    'AGCP Farmaceuticos provides proprietary nanotechnology drug delivery platforms for pharmaceutical licensing. EU GMP certified B2B technology partner.',
  keywords: [
    'pharmaceutical nanotechnology platform',
    'drug delivery technology licensing',
    'nano-emulsion pharmaceutical',
    'transdermal drug delivery',
    'graphene pharmaceutical applications',
    'blood-brain barrier delivery',
    'B2B pharmaceutical technology platform',
  ],
  authors: [{ name: 'AGCP Farmaceuticos, LDA' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'AGCP Farmaceuticos',
    title: 'AGCP Farmaceuticos - Pharmaceutical Nanotechnology Platform',
    description:
      'Proprietary nanotechnology drug delivery platforms for pharmaceutical licensing. EU GMP certified.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AGCP Farmaceuticos - Pharmaceutical Nanotechnology Platform',
    description:
      'Proprietary nanotechnology drug delivery platforms for pharmaceutical licensing.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
