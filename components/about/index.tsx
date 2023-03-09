import cn from "classnames";
import Image from "next/image";
import coderImg from "@/public/assets/vectors/coder1.png";

const About = () => {
  return (
    <div id='about' className={cn("grid grid-cols-2 gap-14")}>
      <div className={cn("col-span-2 md:col-span-1")}>
        <p
          className={cn(
            "font-mono text-lg mb-7",
            "text-light-text-2",
            "dark:text-dark-text-2"
          )}
        >
          Hello there, my name is
        </p>
        <h1
          className={cn(
            "font-calibre font-bold text-5xl md:text-7xl ",
            "text-light-primary-1",
            "dark:text-dark-primary-1"
          )}
        >
          Ahmed Azmy.
        </h1>
        <h2
          className={cn(
            "font-calibre font-bold text-5xl md:text-7xl",
            "text-light-text-2",
            "dark:text-dark-text-2"
          )}
        >
          I build web stuff.
        </h2>
        <p
          className={cn(
            "text-light-text-2",
            "dark:text-dark-text-3",
            "font-mono text-lg mt-7"
          )}
        >
          I’m a software engineer and a graphic designer specializing in
          building and designing Websites. Currently, I’m focused on building
          the neatest yet most robust web products
        </p>
      </div>
      <div className={cn("col-span-2 md:col-span-1 flex justify-start")}>
        <Image className={cn("object-contain")} src={coderImg} alt='coder' />
      </div>
    </div>
  );
};

export default About;
