import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import { IPostWithContent } from "../../app/interfaces/pages/Home";

const BlogPost = ({ content, frontMatter: { title, date, cover_image } }: IPostWithContent) => {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
      </Head>
      <Link href={"/"}>
        <a className="btn btn-back">Go Back</a>
      </Link>
      <div className="card card-page">
        <h1 className="post-title">{title}</h1>
        <div className="post-date">{date}</div>
        <img src={cover_image} alt={title} />
        <div className="post-body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({ params: { blogSlug: filename.replace(".md", "") } }));
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx?.params?.blogSlug;
  const markdownWithMeta = fs.readFileSync(path.join("posts", `${slug}.md`), "utf-8");
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const post = { slug, frontMatter, content } as IPostWithContent;
  return {
    props: { ...post }
  };
};
