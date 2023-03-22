import cn from "classnames";
import { useState } from "react";
import dynamic from "next/dynamic";
import Brand from "./Brand";
import NavLinks from "./NavLinks";
import MenuButton from "./MenuButton";
import Overlay from "./Overlay";

const ThemeIcon = dynamic(() => import("./ThemeIcon"), {
  ssr: false,
});

const Navbar = () => {
  const [menuIsVisible, setmenuIsVisible] = useState(false);

  const toggleMenu = () => {
    setmenuIsVisible(!menuIsVisible);
  };

  return (
    <nav id='navbar' className={cn("flex justify-center mb-[112px] pt-12")}>
      <div
        className={cn(
          "flex flex-wrap md:flex-nowrap justify-between gap-x-16 p-0",
          "w-10/12 xl:w-[1036px]"
        )}
      >
        <Brand />
        <MenuButton menuIsVisible={menuIsVisible} toggleMenu={toggleMenu} />
        <div className={cn("basis-full", "md:hidden")}></div>
        <Overlay menuIsVisible={menuIsVisible} />
        <div
          className={cn(
            { "!top-0": menuIsVisible },
            "transition-all duration-700  ",
            "fixed left-0 -top-[100%] w-full h-full overflow-hidden",
            "flex flex-col justify-center items-center text-center w-full  gap-y-6",
            "md:flex-row md:justify-between",
            "md:relative md:top-0 md:left-0  "
          )}
        >
          <NavLinks toggleMenu={toggleMenu} />
          <ThemeIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
