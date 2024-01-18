import dayjs from "dayjs";

import { getLatestBlogPosts } from "@/sanity/queries/post-list";
import { Post } from "@/sanity/schemas/post";
import { cn } from "@/utils";

import List from "./list";

async function PostList(props: {
  className?: string;
  animationDirection?: "x" | "y";
}) {
  const { className, animationDirection = "x" } = props;
  const posts: Post[] =
    (await getLatestBlogPosts({
      limit: 10,
    })) || [];

  // Sort posts by year and month
  posts.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB.getTime() - dateA.getTime();
  });

  // Convert sorted posts to an object using year as key
  const postsByYear: { [year: string]: Post[] } = {};
  posts.forEach((post) => {
    const year = dayjs(post.createdAt).format("YYYY");
    if (!postsByYear[year]) {
      postsByYear[year] = [];
    }
    postsByYear[year].push(post);
  });

  // Render the sorted posts by year
  return (
    <List
      postsByYear={postsByYear}
      className={cn(className)}
      animationDirection={animationDirection}
    />
  );
}

export default PostList;
