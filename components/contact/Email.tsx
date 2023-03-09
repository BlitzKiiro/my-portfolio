import cn from "classnames";
import Link from "next/link";

const Email = () => {
  return (
    <div className={cn("flex items-start md:items-center flex-col")}>
      <h1 className='text-3xl font-bold'>
        Let&#39;s talk about your{" "}
        <span className='text-light-primary-1 dark:text-dark-primary-1'>
          {" "}
          next project{" "}
        </span>
      </h1>
      <p className='mt-2'>
        I&#39;m currently looking for more employment and freelance
        opportunities
      </p>
      <Link target={"_blank"} href='mailto:ahmedazmytobi@gmail.com'>
        <p
          className={cn(
            "mt-10 text-xl relative",
            'after:content-[" "] after:block after:absolute after:-bottom-2 after:w-full after:h-[2px]',
            "after:bg-light-primary-2 dark:after:bg-dark-primary-2"
          )}
        >
          ahmedazmytobi@gmail.com
        </p>
      </Link>
    </div>
  );
};

export default Email;
