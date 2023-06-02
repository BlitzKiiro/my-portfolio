import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { MouseEventHandler } from "react";

const NavLinks = ({ toggleMenu }: { toggleMenu: MouseEventHandler }) => {
  const router = useRouter();
  const handleNavClick = (e: React.MouseEvent) => {
    console.log("click", router.pathname);

    if (router.pathname === "/" || router.pathname.startsWith("/#")) return;

    e.preventDefault();
    const target = e.target as HTMLElement;
    router.push(target.attributes.getNamedItem("href")?.value ?? "/");
  };
  return (
    <ul
      className={cn(
        "md:flex-row md:items-center md:gap-x-12 ",
        "flex flex-col gap-y-8 mb-8 md:mb-0",
        "text-xl md:text-base"
      )}
      onClickCapture={toggleMenu}
    >
      <Link
        onClick={handleNavClick}
        href={"/#about"}
        data-scrollto={"#about"}
        prefetch={false}
        passHref
      >
        <li className='navlink'>About</li>
      </Link>

      <Link
        onClick={handleNavClick}
        href={"/#work"}
        data-scrollto={"#work"}
        prefetch={false}
        passHref
      >
        <li className='navlink'>Work</li>
      </Link>
      <Link
        onClick={handleNavClick}
        href={"/#skills"}
        data-scrollto={"#skills"}
        prefetch={false}
        passHref
      >
        <li className='navlink'>Skills</li>
      </Link>
      <Link
        onClick={handleNavClick}
        href={"/#contact"}
        data-scrollto={"#contact"}
        prefetch={false}
        passHref
      >
        <li className='navlink'>Contact</li>
      </Link>
      <Link href={"/blog"} prefetch={false} passHref>
        <li className='navlink'>Blog</li>
      </Link>
    </ul>
  );
};

export default NavLinks;
