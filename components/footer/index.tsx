import cn from "classnames";
import { NavArrowUp, CoffeeCup } from "iconoir-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className={cn(
        "flex flex-col items-center justify-center gap-5 p-10  relative mt-10"
      )}
    >
      <p
        className={cn(
          " text-center",
          "text-light-text-2",
          "dark:text-dark-text-2"
        )}
      >
        Ahmed Azmy © 2023 <br /> built with{" "}
        <CoffeeCup className=' inline-block w-5 h-5 relative -top-1 ' />
      </p>

      <span
        className={cn(
          "text-sm font-semibold",
          "text-light-text-2",
          "dark:text-dark-text-2",
          "block md:absolute md:right-24 "
        )}
      >
        <Link href={"/#"}>
          <NavArrowUp className='w-6 h-6 inline-block' /> Back to top
        </Link>
      </span>
    </footer>
  );
};

export default Footer;
