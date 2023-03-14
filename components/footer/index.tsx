import cn from "classnames";
import { NavArrowUp, CoffeeCup } from "iconoir-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={cn("flex justify-center p-10")}>
      <div
        className={cn(
          "flex flex-col items-center gap-y-2",
          "md:flex-row  md:justify-between",
          "w-11/12",
          "xl:w-[920px]",
          " text-sm",
          "text-light-text-2",
          "dark:text-dark-text-3"
        )}
      >
        <p>© 2023 Ahmed Azmy</p>

        <span
          className={cn(
            "text-sm font-semibold md:font-normal",
            "text-light-text-1 md:text-inherit",
            "dark:text-dark-text-2 md:text-inherit",
            "block "
          )}
        >
          <Link href={"#"}>
            <NavArrowUp className='w-6 h-6 inline-block font-bold stroke-[2.5]' />{" "}
            Back To Top
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
