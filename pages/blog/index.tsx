import Head from "next/head";
import cn from "classnames";
import Client from "@/configs/blogs/ContentfulClient";
import { BlogPost } from "@/common/types/blog";
import BlogCard from "@/components/blog card";

export async function getStaticProps() {
  const res = await Client.getEntries({ content_type: "blogs" });
  const blogs = res.items;

  return {
    props: {
      blogs,
    },
    revalidate: 10,
  };
}

const AllBlogs = ({ blogs }: { blogs: BlogPost[] }) => {
  return (
    <>
      <Head>
        <title>Ahmed Azmy | Blog</title>
        <meta property='og:title' content='Ahmed Azmy blog' />
        <meta
          property='og:description'
          content='Ahmed Azmy technical & personal blog'
        />
        <meta
          property='og:image'
          content={"https://www.ahmedazmy.xyz/assets/vectors/Bloging.png"}
        />
      </Head>
      <main className={cn("flex  justify-center my-[25px] md:my-[160px]")}>
        <div className={cn("w-[90%]", "xl:w-[1036px]", "flex flex-col")}>
          <h1 className='text-3xl md:text-4xl font-bold mb-4'>All blogs</h1>
          <div className='my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {blogs.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default AllBlogs;
