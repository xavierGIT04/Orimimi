import type { Metadata } from 'next';
import { Montserrat, Dancing_Script } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MotionProvider } from '@/components/motion/MotionProvider';

const sans = Montserrat({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const script = Dancing_Script({ subsets: ['latin'], variable: '--font-script', display: 'swap' });

export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    title: { default: `${site.name} — Rénovation & aménagement`, template: `%s | ${site.name}` },
    description: site.description,
    openGraph: { type: 'website', locale: 'fr_FR', siteName: site.name, images: ['/images/hero.jpeg'] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" className={`${sans.variable} ${script.variable}`}>
        <body className="flex min-h-screen flex-col">
        <MotionProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
        </MotionProvider>
        </body>
        </html>
    );
}
