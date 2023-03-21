import cn from "classnames";
import { useState } from "react";
import dynamic from "next/dynamic";
import Brand from "./Brand";
import NavLinks from "./NavLinks";
import MenuButton from "./MenuButton";

const ThemeIcon = dynamic(() => import("./ThemeIcon"), {
  ssr: false,
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
        <Brand />
        <MenuButton menuIsVisible={menuIsVisible} toggleMenu={toggleMenu} />
        {/* line break */}
        <div className={cn("basis-full", "md:hidden")}></div>
        {/* links & buttons*/}
        <div
          className={cn(
            { "!max-h-[1000px]": menuIsVisible },
            "transition-all duration-300 ease-in-out",
            "flex flex-col items-center text-center w-full my-10 gap-y-6 max-h-0 overflow-hidden",
            "md:flex-row md:justify-between md:my-0 md:max-h-full"
          )}
        >
          <NavLinks />
          <ThemeIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
