"use client";

import dayjs from "dayjs";
import { motion } from "framer-motion";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

import { Badge } from "@/components/ui/badge";
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
              <PostItem key={post._id} post={post} />
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  );
}

const PostItem = ({ post }: { post: Post }) => {
  const { title, slug, createdAt, categories } = post;

  return (
    <li className="mb-4 sm:mb-6">
      <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-200">
        <Link href={`/blog/${slug}`}>
          <Balancer>{title}</Balancer>
        </Link>
      </h3>
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <span className="text-sm text-neutral-500 dark:text-neutral-300">
          {dayjs(createdAt).format("MMMM D")}
        </span>
        {categories?.length && (
          <>
            {categories.map((category, ind) => (
              <Badge
                key={category + ind}
                variant="secondary"
                className="px-1 text-neutral-600 dark:text-neutral-400"
              >
                {"# " + category}
              </Badge>
            ))}
          </>
        )}
      </div>
    </li>
  );
};
