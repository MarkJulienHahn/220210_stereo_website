import Head from "next/head.js";

import { AnalyticsWrapper } from "./Analytics.js";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="keywords" content="web" />
        <meta
          name="keywords"
          content="Stereo Typefaces, Type Design, Typefaces, Typography, Variable Fonts, Berlin"
        />
        <meta
          name="thumbnail"
          content="../public/images/stereo-typefaces_happyface.jpg"
        />
        <link rel="icon" href="/favicon.ico" sizes="any"></link>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <link
          rel="preload"
          href="/fonts/ProtestGrotesk.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/ProtestGroteskMono.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/GialloRoman.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
