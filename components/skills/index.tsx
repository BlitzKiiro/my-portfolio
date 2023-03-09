import cn from "classnames";
import TechBubble from "./TechBubble";
import techList from "./techs.meta.json";

const Skills = () => {
  return (
    <div id='skills' className={cn("flex flex-col gap-y-5 ")}>
      <h1 className={cn("text-4xl font-bold")}>
        <span className={cn("text-light-primary-1 dark:text-dark-primary-1")}>
          #{" "}
        </span>
        Technologies I Practice
      </h1>
      <div
        className={cn(
          "columns-2 md:columns-4 lg:columns-6 xl:columns-6  mt-10 "
        )}
      >
        {techList.map((tech, index) => {
          return <TechBubble key={index} tech={tech} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
