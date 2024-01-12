import { getLatestBlogPosts } from "@/sanity/queries/post-list";
import { Post } from "@/sanity/schemas/post";
import dayjs from "dayjs";
import Link from "next/link";

async function PostList() {
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
    <div>
      {Object.entries(postsByYear).map(([year, posts]) => (
        <div key={year}>
          <h2 className="mb-4 text-4xl font-bold">{year}</h2>
          <ul>
            {posts.map((post) => (
              <PostItem key={post.slug} post={post} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

const PostItem = ({ post }: { post: Post }) => {
  const { title, slug, createdAt } = post;

  return (
    <li>
      <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200">
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h3>
      <span className="text-sm text-slate-500 dark:text-slate-300">
        {dayjs(createdAt).format("MMMM D")}
      </span>
    </li>
  );
};

export default PostList;
