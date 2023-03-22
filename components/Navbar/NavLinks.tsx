import cn from "classnames";
import Link from "next/link";
import { MouseEventHandler } from "react";

const NavLinks = ({ toggleMenu }: { toggleMenu: MouseEventHandler }) => {
  return (
    <ul
      className={cn(
        "md:flex-row md:items-center md:gap-x-12 ",
        "flex flex-col gap-y-8 mb-8",
        "text-xl md:text-base"
      )}
      onClickCapture={toggleMenu}
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
  );
};

export default NavLinks;
