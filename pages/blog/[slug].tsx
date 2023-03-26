import Head from "next/head";
import Image from "next/image";
import Contentful, { createClient } from "contentful";
import { GetStaticPropsContext } from "next";
import cn from "classnames";
import { format } from "date-fns";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import richTextRenderOptions from "@/configs/blogs/Richtext";

interface Fields {
  title: Contentful.EntryFields.Text;
  slug: Contentful.EntryFields.Text;
  content: Document;
  thumbnail: Contentful.Asset;
}

interface BlogPost {
  fields: Fields;
  metadata: Contentful.Metadata;
  sys: Contentful.Sys;
}

const Client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

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
  if (!blog) return <></>;
  return (
    <>
      <Head>
        <title>{blog.fields.title}</title>
      </Head>
      <main className={cn("flex  justify-center my-[25px] md:my-[128px]")}>
        <div className={cn("w-[90%]", "xl:w-[1036px]", "flex flex-col")}>
          <h1 className='text-5xl font-bold mb-4'>{blog.fields.title}</h1>
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
          <div className='my-20'>
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
