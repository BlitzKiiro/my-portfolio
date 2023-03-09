import cn from "classnames";
import Image from "next/image";
import { ReactNode } from "react";

interface propTypes {
  label: string;
  img: string;
}

const TechBubble = ({ tech }: { tech: propTypes }) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center w-full mb-10 relative group cursor-pointer"
      )}
    >
      <div
        className={cn(
          "group",
          "w-[75px] h-[75px] md:w-[100px] md:h-[100px] ",
          "group-hover:scale-[1.25] scale-[1] duration-300 hover:z-10 transition"
        )}
      >
        <div
          className={cn(
            "absolute z-20 top-3 -left-3 ",
            "invisible group-hover:visible",
            "bg-light-container-4 dark:bg-dark-container-2",
            "py-[2px] px-2 rounded-lg",
            "text-xs"
          )}
        >
          {tech.label}
        </div>
        <Image alt={tech.label} src={`/assets/tech logos/${tech.img}`} fill />
      </div>
    </div>
  );
};

export default TechBubble;
