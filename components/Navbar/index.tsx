import cn from "classnames";
import { Cairo } from "next/font/google";
import { Menu } from "iconoir-react";
import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

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
    <nav id='navbar' className={cn("flex justify-center pt-12")}>
      <div
        className={cn(
          "flex flex-wrap  justify-between gap-x-16 p-0",
          "md:flex-nowrap",
          "w-10/12",
          "xl:w-[1036px]"
        )}
      >
        {/* logo */}
        <Link href={"/"}>
          <span
            className={cn(
              "cursor-pointer font-semibold text-2xl",
              "text-light-text-1",
              "dark:text-dark-text-1"
            )}
          >
            ahmedAzmy
          </span>
        </Link>
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
            <Link href={"/#about"}>
              <li className='navlink'>About</li>
            </Link>

            <Link data-scroll-target='#work' href={"/#work"}>
              <li className='navlink'>Work</li>
            </Link>
            <Link href={"/#skills"}>
              <li className='navlink'>Skills</li>
            </Link>
            <Link href={"/#contact"}>
              <li className='navlink'>Contact</li>
            </Link>
            <span className='flex items-center gap-x-1'>
              <li className='navlink'>Blog </li>
              <span
                className={cn(
                  "dark:bg-dark-container-2 dark:text-dark-text-2",
                  "bg-light-container-3 text-light-text-2 text-xs",
                  "px-2 rounded-xl",
                  "inline-block "
                )}
              >
                soon
              </span>
            </span>
          </ul>
          <ThemeIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
