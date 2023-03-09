import cn from "classnames";
import Business from "./Business";
import Email from "./Email";
import Social from "./Social";
const Contact = () => {
  return (
    <div id='contact' className={cn("flex flex-col gap-y-12 ")}>
      <h1 className={cn("text-4xl md:text-center font-bold")}>
        <span className={cn("text-light-primary-1 dark:text-dark-primary-1")}>
          #{" "}
        </span>
        Reach Me Out
      </h1>
      <Social />
      <Business />
      <Email />
    </div>
  );
};

export default Contact;
