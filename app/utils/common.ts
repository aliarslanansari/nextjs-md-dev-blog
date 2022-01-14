import { IPost } from "../interfaces/pages/Home";

export const sortByDate = (post1: IPost, post2: IPost) => {
  return +new Date(post1?.frontMatter?.date) - +new Date(post2?.frontMatter?.date);
};
