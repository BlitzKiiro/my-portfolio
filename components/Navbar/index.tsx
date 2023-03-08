import cn from "classnames";
import { Cairo } from "next/font/google";
import { Menu } from "iconoir-react";
import { useState } from "react";
import dynamic from "next/dynamic";

const ThemeIcon = dynamic(() => import("./themeIcons"), {
  ssr: false,
});

const cairo = Cairo({
  subsets: ["latin"],
  style: "normal",
});

const Navbar = () => {
  const [menuIsVisible, setmenuIsVisible] = useState(false);

  const toggleMenu = () => {
    setmenuIsVisible(!menuIsVisible);
  };

  return (
    <nav className={cn("flex justify-center pt-12")}>
      <div
        className={cn(
          "flex flex-wrap  justify-between gap-x-16 p-0",
          "md:flex-nowrap",
          "w-10/12",
          "xl:w-[1036px]"
        )}
      >
        {/* logo */}
        <div
          className={cn(
            "cursor-pointer font-semibold text-2xl",
            "text-light-text-1",
            "dark:text-dark-text-1"
          )}
        >
          ahmedAzmy
        </div>
        {/* bars icon  */}
        <div onClick={toggleMenu} className={cn(" inline", "md:hidden")}>
          <Menu className={cn("w-8 h-8")} />
        </div>
        {/* line break */}
        <div className={cn("basis-full", "md:hidden")}></div>
        {/* links & buttons*/}
        <div
          className={cn(
            { "!max-h-[1000px]": menuIsVisible },
            "transition-all duration-700 ease-in-out",
            "flex flex-col items-center text-center w-full my-10 gap-y-6 max-h-0 overflow-hidden",
            "md:flex-row md:justify-between md:my-0 md:max-h-full"
          )}
        >
          <ul
            className={cn(
              "md:flex-row md:items-center md:gap-x-12 ",
              "flex flex-col gap-y-4 "
            )}
          >
            <li className='navlink'>About</li>
            <li className='navlink'>Work</li>
            <li className='navlink'>Skills</li>
            <li className='navlink'>Contact</li>
            <li className='navlink'>Blog</li>
          </ul>
          <ThemeIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
