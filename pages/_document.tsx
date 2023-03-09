import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          type='module'
          strategy='beforeInteractive'
          src='/scripts/scrollconfig.js'
        />
      </body>
    </Html>
  );
}
