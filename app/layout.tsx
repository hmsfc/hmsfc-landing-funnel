import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import AppLayout from './appLayout';

const inter = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TMW | Growth Consulting',
  description:
    'We’re data-driven strategists delivering growth optimization approaches to unlock the full swing potential of revenue streams in your business.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const clarityId = 'nxeuyriz3z';
  return (
    <html lang="en">
      <head>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){
              (c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);
            t.async=1;
            t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];
            y.parentNode.insertBefore(t,y);
          })(window, document, 'clarity', 'script', '${clarityId}');
        `}
        </Script>
      </head>
      <body suppressHydrationWarning={true} className={inter.className}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
