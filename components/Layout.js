import { AnalyticsWrapper } from './Analytics.js';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Stereo Typefaces®</title>
      </head>
      <body>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
