import Head from 'next/head.js';

import { AnalyticsWrapper } from './Analytics.js';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Stereo Typefaces®</title>
      </Head>
      <body>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
