import cn from "classnames";
import { MouseEventHandler } from "react";

interface propsTypes {
  toggleMenu: MouseEventHandler;
  menuIsVisible: boolean;
}

const barline =
  "w-7 h-0.5 rounded-md bg-light-text-1 dark:bg-dark-text-1 transition ease-in-out duration-300 ";

const MenuButton = ({ toggleMenu, menuIsVisible }: propsTypes) => {
  return (
    <button
      onClick={toggleMenu}
      className={cn(
        "flex flex-col gap-y-2 relative z-20 w-8 h-8",
        "md:hidden",
        { "!fixed right-8": menuIsVisible }
      )}
    >
      <div
        className={cn(barline, { "rotate-45 translate-y-2.5": menuIsVisible })}
      ></div>
      <div className={cn(barline, { "opacity-0": menuIsVisible })}></div>
      <div
        className={cn(barline, {
          "-rotate-45 -translate-y-2.5": menuIsVisible,
        })}
      ></div>
    </button>
  );
};

export default MenuButton;
