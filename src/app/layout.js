import './globals.css';
import { Header, Footer } from '@/components/layout';
import { philosopher } from '@/lib/fonts';

export const metadata = {
  title: 'Aran Doncel Photography',
  description: 'Step into a hidden world with detailed macro photography capturing insects, textures, and nature’s finest details.',
  openGrapg: {
    title: 'Aran Doncel Photography',
    type: 'website',
    url: 'https://arandoncel.com',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Aran Doncel Photography'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aran Doncel Photography',
    description: 'Step into a hidden world with detailed macro photography capturing insects, textures, and nature’s finest details.',
    images: ['https://arandoncel.com/og-image.jpg'],
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
