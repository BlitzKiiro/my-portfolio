import cn from "classnames";
import { MouseEventHandler } from "react";

interface propsTypes {
  toggleMenu: MouseEventHandler;
  menuIsVisible: boolean;
}

const MenuButton = ({ toggleMenu, menuIsVisible }: propsTypes) => {
  return (
    <button
      onClick={toggleMenu}
      className={cn("flex flex-col gap-y-2  relative w-8 h-8", "md:hidden")}
    >
      <div className='w-7 h-0.5 rounded-md bg-white'></div>
      <div className='w-7 h-0.5 rounded-md bg-white'></div>
      <div className='w-7 h-0.5 rounded-md bg-white'></div>
    </button>
  );
};

export default MenuButton;
