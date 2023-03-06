import cn from "classnames";
import { useEffect, useState } from "react";
import { Cairo } from "next/font/google";
import { splashAnimation } from "./animations";
import { enablePageScroll, disablePageScroll } from "scroll-lock";

const cairo = Cairo({
  subsets: ["latin"],
  style: "normal",
});

const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    (async () => {
      disablePageScroll();
      await splashAnimation();
      setVisible(false);
      enablePageScroll();
    })();
  }, []);

  return (
    <div
      id='splash-container'
      className={cn(
        { hidden: !visible },
        "flex flex-col items-center justify-center gap-y-1",
        "fixed w-full h-full z-50",
        "bg-light-bg-2 ",
        "dark:bg-dark-bg-2"
      )}
    >
      <div
        id='logo-container'
        className={cn(
          "flex items-center justify-center gap-x-[1px]",
          " text-light-primary-1",
          "dark:text-dark-primary-1"
        )}
      >
        <span id='left-bracket' className={cn("text-5xl grayscale")}>
          &lt;
        </span>
        <span id='name-block' className={cn("w-0 text-6xl")}>
          <span
            id='azmy'
            className={cn("scale-0 inline-block", cairo.className)}
          >
            Azmy
          </span>
          <span id='slash' className={cn("scale-0 inline-block")}>
            /
          </span>
        </span>
        <span id='right-bracket' className={cn("text-5xl grayscale")}>
          &gt;
        </span>
      </div>
    </div>
  );
};

export default LoadingScreen;
