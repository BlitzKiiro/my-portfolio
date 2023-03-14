import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Ahmed Azmy website, portfolio & blog'
        />
      </Head>
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
