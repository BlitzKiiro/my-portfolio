import Head from "next/head";
import Image from "next/image";
import { GetStaticPropsContext } from "next";
import Client from "@/configs/blogs/ContentfulClient";
import { BlogPost, Fields } from "@/common/types/blog";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import richTextRenderOptions from "@/configs/blogs/Richtext";
import cn from "classnames";
import { format } from "date-fns";
import Skeleton from "@/components/skeleton";

export async function getStaticPaths() {
  const { items } = await Client.getEntries({
    content_type: "blogs",
  });
  const paths = items.map((item) => {
    return { params: { slug: (item.fields as Fields).slug } };
  });
  return { paths, fallback: true };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { slug } = context.params!;

  const { items } = await Client.getEntries({
    content_type: "blogs",
    "fields.slug": slug,
  });

  if (items.length === 0)
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };

  const blog = items[0];

  return {
    props: { blog },
    revalidate: 10,
  };
}
const Blog = ({ blog }: { blog: BlogPost }) => {
  if (!blog)
    return (
      <>
        <Head>
          <title>Ahmed Azmy blog</title>
        </Head>
        <main>
          <Skeleton />
        </main>
      </>
    );
  return (
    <>
      <Head>
        <title>{blog.fields.title}</title>
        <meta property='og:title' content={blog.fields.title} />
        <meta property='og:description' content={blog.fields.metaDescription} />
        <meta
          property='og:image'
          content={"https:" + blog.fields.thumbnail.fields.file.url}
        />
      </Head>
      <main className={cn("flex  justify-center my-[25px] md:my-[160px]")}>
        <div className={cn("w-[90%]", "xl:w-[1036px]", "flex flex-col")}>
          <h1 className='text-3xl md:text-5xl font-bold mb-4'>
            {blog.fields.title}
          </h1>
          <span className='flex gap-x-2 text-light-text-2 dark:text-dark-text-3'>
            <p>{format(new Date(blog.sys.createdAt), "yyyy-MM-dd")}</p>—
            {blog.metadata.tags.map((tag, i) => (
              <p key={i}>🏷️{tag.sys.id}</p>
            ))}
          </span>
          <Image
            className='my-12'
            alt={blog.fields.thumbnail.fields.description}
            src={"https:" + blog.fields.thumbnail.fields.file.url}
            width={blog.fields.thumbnail.fields.file.details.image?.width}
            height={blog.fields.thumbnail.fields.file.details.image?.height}
          />
          <div className='my-16'>
            {documentToReactComponents(
              blog.fields.content,
              richTextRenderOptions
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Blog;
