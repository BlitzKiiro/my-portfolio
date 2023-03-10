import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import cn from "classnames";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <LoadingScreen />
      <Navbar />
      <Component {...pageProps} className={cn(inter.className)} />
      <Analytics />
      <Footer />
    </ThemeProvider>
  );
}
