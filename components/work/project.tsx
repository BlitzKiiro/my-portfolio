import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

interface propTypes {
  previewImg: string;
  previewLink: string;
  title: string;
  description: string;
  key: string;
  tags: string[];
  reversed: boolean;
}

const Project = ({ project }: { project: propTypes }) => {
  return (
    <div className={cn("grid grid-cols-5 gap-10 my-10")}>
      <div
        className={cn("col-span-5 md:col-span-3  ", {
          "order-last": project.reversed,
        })}
      >
        <Image
          width={1000}
          height={1000}
          alt='project img'
          src={"/assets/mockups/" + project.previewImg}
        />
      </div>
      <div className='col-span-5 md:col-span-2 md:w-[80%] pt-5'>
        <div className='flex justify-between '>
          <h1
            className={cn(
              "font-bold text-7xl text-dark-bg-1 bg-dark-primary-1"
            )}
          >
            {project.key}
          </h1>
          <div className={cn("flex")}>
            <Link target={"_blank"} href={project.previewLink}>
              <ArrowTopRightOnSquareIcon className={cn("w-6 h-6")} />
            </Link>
          </div>
        </div>
        <h1 className='text-2xl font-semibold mt-5'>{project.title}</h1>
        <p className='mt-5'>{project.description}</p>
        <div className='mt-14 flex gap-x-3'>
          {project.tags.map((tag, index) => {
            return (
              <span
                className={cn(
                  "dark:bg-dark-container-3 bg-light-container-4",
                  "rounded-3xl px-3 "
                )}
                key={index}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
