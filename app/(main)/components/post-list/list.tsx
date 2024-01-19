"use client";

import dayjs from "dayjs";
import { motion } from "framer-motion";
import Link from "next/link";

import { Post } from "@/sanity/schemas/post";
import { cn } from "@/utils/cn";

export default function List(props: {
  className?: string;
  postsByYear: { [year: string]: Post[] };
  animationDirection: "x" | "y";
}) {
  const { className, postsByYear, animationDirection } = props;
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, [animationDirection]: 45 }}
      animate={{ opacity: 1, [animationDirection]: 0 }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
      }}
    >
      {Object.entries(postsByYear).map(([year, posts]) => (
        <div key={year}>
          <h2 className="mb-2 text-3xl font-bold">{year}</h2>
          <ul>
            {posts.map((post) => (
              <PostItem key={post.slug} post={post} />
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  );
}

const PostItem = ({ post }: { post: Post }) => {
  const { title, slug, createdAt } = post;

  return (
    <li>
      <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-200">
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h3>
      <span className="text-sm text-neutral-500 dark:text-neutral-300">
        {dayjs(createdAt).format("MMMM D")}
      </span>
    </li>
  );
};
