import Link from "next/link";
import cn from "classnames";

const Brand = () => {
  return (
    <Link href={"/"}>
      <span
        className={cn(
          "cursor-pointer font-semibold text-2xl",
          "text-light-text-1",
          "dark:text-dark-text-1"
        )}
      >
        ahmedAzmy
      </span>
    </Link>
  );
};

export default Brand;
