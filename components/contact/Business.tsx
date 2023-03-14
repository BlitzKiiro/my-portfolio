import cn from "classnames";
import Link from "next/link";
import { LinkedIn, GitHub } from "iconoir-react";

const Business = () => {
  return (
    <div className={cn("flex md:items-center flex-col")}>
      <p className={cn("text-light-text-2", "dark:text-dark-text-3")}>
        Professionaly or as a fellow developer?
      </p>
      <div className='flex justify center gap-7 mt-5'>
        <Link
          target={"_blank"}
          href={"https://www.linkedin.com/in/ahmed-azmy-cs/"}
        >
          <LinkedIn className='w-6 h-6' />
        </Link>
        <Link target={"_blank"} href='https://github.com/BlitzKiiro'>
          <GitHub className='w-6 h-6' />
        </Link>
      </div>
    </div>
  );
};

export default Business;
