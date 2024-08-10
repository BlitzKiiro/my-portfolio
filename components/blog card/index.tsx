import { BlogPost } from "@/common/types/blog";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import cn from "classnames";
import { splitCamelCaseToPascalCase } from "@/utils/helpers";

const BlogCard = ({
  blog,
  className,
}: {
  blog: BlogPost;
  className?: string;
}) => {
  return (
    <Link href={`/blog/${blog.fields.slug}`}>
      <div
        className={cn(
          " md:max-w-lg  bg-light-container-1 rounded-sm shadow dark:bg-dark-container-1 hover:animate-smooth-move-up",
          className
        )}
      >
        <div className='relative pt-[52%]'>
          <Image
            className='rounded-t-lg'
            alt={blog.fields.thumbnail.fields.description}
            src={"https:" + blog.fields.thumbnail.fields.file.url}
            fill
            objectFit='cover'
          />
        </div>

        <div className='p-5'>
          <div className='mb-8'>
            <h5 className='mb-2 text-base font-bold tracking-tight line line-clamp-2 min-h-12 '>
              {blog.fields.title}
            </h5>

            <p className='mb-3 text-sm text-light-text-2 dark:text-dark-text-2 line-clamp-3 min-h-16'>
              {blog.fields.metaDescription}
            </p>
          </div>
          <div className='flex justify-between text-xs text-light-text-2 dark:text-dark-text-2'>
            <span className='flex gap-x-2 t'>
              <p>{format(new Date(blog.sys.createdAt), "yyyy-MM-dd")}</p>—
              <p>{splitCamelCaseToPascalCase(blog.metadata.tags[0].sys.id)}</p>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
