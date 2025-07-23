import './globals.css';
import { Header, Footer } from '@/components/layout';
import { philosopher } from '@/lib/fonts';

export const metadata = {
  title: 'Aran Doncel Photography',
  description: "Step into a hidden world with detailed macro photography capturing insects, textures, and nature's finest details.",
  openGraph: {
    title: 'Aran Doncel Photography',
    description: "Step into a hidden world with detailed macro photography capturing insects, textures, and nature's finest details.",
    type: 'website',
    url: 'https://arandoncel.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aran Doncel Photography',
    description: 'Step into a hidden world with detailed macro photography capturing insects, textures, and nature’s finest details.'
  },
  icons: {
    icon: '/images/favicon.png',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-16">
      <body className={`${philosopher.className} antialiased`}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
