import cn from "classnames";
import Project from "./project";
import projectsMeta from "./projects.meta.json";

const Work = () => {
  return (
    <div id='work' className={cn("flex flex-col gap-y-5 ")}>
      <h1 className={cn("text-4xl font-bold")}>
        <span className={cn("text-light-primary-1 dark:text-dark-primary-1")}>
          #{" "}
        </span>
        Things I Built
      </h1>

      {projectsMeta.map((projectInfo, index) => {
        return <Project key={index} project={projectInfo} />;
      })}
    </div>
  );
};

export default Work;
