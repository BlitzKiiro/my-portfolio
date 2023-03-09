import cn from "classnames";
import Link from "next/link";
import { Facebook, Twitter, Discord } from "iconoir-react";

const Social = () => {
  return (
    <div className={cn("flex items-center flex-col")}>
      <p className={cn("text-light-text-2", "dark:text-dark-text-3")}>
        Want to connect and hangout as friends? check out my social networks
      </p>
      <div className='flex justify center gap-7 mt-5'>
        <Link
          target={"_blank"}
          href={"https://www.facebook.com/100009391450593"}
        >
          <Facebook className='w-6 h-6' />
        </Link>
        <Link target={"_blank"} href='https://twitter.com/AzmyNG'>
          <Twitter className='w-6 h-6' />
        </Link>
        <Link
          target={"_blank"}
          href='https://discord.com/users/819643802225868821'
        >
          <Discord className='w-6 h-6' />
        </Link>
      </div>
    </div>
  );
};

export default Social;
