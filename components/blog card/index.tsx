import { BlogPost } from "@/common/types/blog";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

const BlogCard = ({ blog }: { blog: BlogPost }) => {
  return (
    <div className=' md:max-w-lg  bg-light-container-1 rounded-sm shadow dark:bg-dark-container-1 '>
      <Link href={`/blog/${blog.fields.slug}`}>
        <div className='relative pt-[52%]'>
          <Image
            className='rounded-t-lg'
            alt={blog.fields.thumbnail.fields.description}
            src={"https:" + blog.fields.thumbnail.fields.file.url}
            fill
            objectFit='cover'
          />
        </div>
      </Link>
      <div className='p-5'>
        <div className='mb-8'>
          <Link href={`/blog/${blog.fields.slug}`}>
            <h5 className='mb-2 text-2xl font-bold tracking-tight '>
              {blog.fields.title}
            </h5>
          </Link>
          <p className='mb-3 text-sm text-light-text-2 dark:text-dark-text-2'>
            {blog.fields.metaDescription}
          </p>
        </div>
        <div className='flex justify-between text-xs text-light-text-2 dark:text-dark-text-2'>
          <span className='flex gap-x-2 t'>
            <p>{format(new Date(blog.sys.createdAt), "yyyy-MM-dd")}</p>—
            {blog.metadata.tags.map((tag, i, tags) => (
              <p key={i}>
                {tag.sys.id} {i + 1 != tags.length && ","}
              </p>
            ))}
          </span>
          <Link href={`/blog/${blog.fields.slug}`}>Read more {">>"}</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
