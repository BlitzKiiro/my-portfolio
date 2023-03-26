import Image from "next/image";
import { BLOCKS, Node } from "@contentful/rich-text-types";
import { Link as LinkIcon, Quote } from "iconoir-react";
import { ReactElement, ReactNode } from "react";
import cn from "classnames";

const richTextRenderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: Node, children: ReactNode) => {
      return (
        <p
          className={cn(
            "my-3 inline !text-[20px] whitespace-pre-wrap",
            "dark:text-dark-text-2 text-light-text-2"
          )}
        >
          {children}
        </p>
      );
    },
    [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
      return (
        <Image
          className='my-4'
          src={`https://${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt={node.data.target.fields.description}
        />
      );
    },
    [BLOCKS.HEADING_1]: (node: Node, children: ReactNode) => {
      return (
        <h1 className='text-4xl my-10'>
          <LinkIcon className='inline-block text-base' /> {children}
        </h1>
      );
    },
    [BLOCKS.HEADING_2]: (node: Node, children: ReactNode) => {
      return <h2 className='text-3xl my-8'>{children}</h2>;
    },
    [BLOCKS.HEADING_3]: (node: Node, children: ReactNode) => {
      return <h3 className='text-2xl my-7 '>{children}</h3>;
    },
    [BLOCKS.HEADING_4]: (node: Node, children: ReactNode) => {
      return <h4 className='text-xl my-6'>{children}</h4>;
    },
    [BLOCKS.HEADING_5]: (node: Node, children: ReactNode) => {
      return <h5 className='text-lg my-5'>{children}</h5>;
    },
    [BLOCKS.HEADING_6]: (node: Node, children: ReactNode) => {
      return <p className='text-sm text-transparent'>{children}</p>;
    },
    [BLOCKS.QUOTE]: (node: Node, children: ReactNode) => {
      return (
        <blockquote className={cn(" italic")}>
          <Quote className='inline-block mx-2 text-base rotate-180' />
          {children}
          <Quote className='inline-block mx-2  text-base ' />
        </blockquote>
      );
    },
  },
};

export default richTextRenderOptions;
