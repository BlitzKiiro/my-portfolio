import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

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
        className={cn(
          "col-span-5 md:col-span-3",
          "order-last",
          `${project.reversed ? "md:order-last" : "md:order-first"}`
        )}
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
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='md:w-6 md:h-6 w-8 h-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
                />
              </svg>
            </Link>
          </div>
        </div>
        <h1 className='text-2xl font-semibold mt-5'>{project.title}</h1>
        <p className='mt-5'>{project.description}</p>
        <div className='mt-5 md:mt-14 flex flex-wrap gap-3'>
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
