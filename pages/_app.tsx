import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <LoadingScreen />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
