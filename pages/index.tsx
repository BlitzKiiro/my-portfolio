import Head from "next/head";
import cn from "classnames";
import About from "@/components/about";
import Work from "@/components/work";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ahmed Azmy</title>
        <meta name='description' content='Ahmed Azmy website & portfolio' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main
        className={cn("flex flex-col items-center my-[25px] md:my-[200px]")}
      >
        <div
          className={cn(
            "w-10/12",
            "xl:w-[1036px]",
            "flex flex-col gap-y-[100px] md:gap-y-[200px]"
          )}
        >
          <About />
          <Work />
          <Skills />
        </div>
      </main>
    </>
  );
}
