import cn from "classnames";
import Link from "next/link";
import { MouseEventHandler } from "react";

const NavLinks = ({ toggleMenu }: { toggleMenu: MouseEventHandler }) => {
  return (
    <ul
      className={cn(
        "md:flex-row md:items-center md:gap-x-12 ",
        "flex flex-col gap-y-8 mb-8 md:mb-0",
        "text-xl md:text-base"
      )}
      onClickCapture={toggleMenu}
    >
      <Link href={"/#about"} passHref>
        <li className='navlink'>About</li>
      </Link>

      <Link href={"/#work"} passHref>
        <li className='navlink'>Work</li>
      </Link>
      <Link href={"/#skills"} passHref>
        <li className='navlink'>Skills</li>
      </Link>
      <Link href={"/#contact"} passHref>
        <li className='navlink'>Contact</li>
      </Link>
      <Link href={"/blog"} passHref>
        <li className='navlink'>Blog</li>
      </Link>
    </ul>
  );
};

export default NavLinks;
