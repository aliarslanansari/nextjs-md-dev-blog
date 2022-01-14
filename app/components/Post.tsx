import Link from "next/link";
import { IPost } from "../interfaces/pages/Home";

interface PostPropsTypes {
  post: IPost;
}

export default function Post({ post }: PostPropsTypes) {
  return (
    <div className="card">
      <img src={post?.frontMatter?.cover_image} alt={post?.frontMatter?.title} />
      {/* <div className="card-image">
      </div> */}
      <div className="post-date">Posted on {post?.frontMatter?.date}</div>
      <h3>{post?.frontMatter?.title}</h3>
      <p>{post?.frontMatter?.excerpt}</p>
      <Link href={`/blog/${post?.slug}`}>
        <a className="btn">Read more</a>
      </Link>
    </div>
  );
}
