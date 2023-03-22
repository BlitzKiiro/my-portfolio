import cn from "classnames";

const Overlay = ({ menuIsVisible }: { menuIsVisible: boolean }) => {
  return (
    <div
      className={cn(
        { "h-full": menuIsVisible },
        "transition-all duration-700",
        "fixed left-0 top-0 w-full h-0",
        "dark:bg-dark-bg-2 bg-light-container-4",
        "md:!hidden"
      )}
    ></div>
  );
};

export default Overlay;
