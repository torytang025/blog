import { groq } from "next-sanity";

import { getDate } from "@/utils/date";

import { clientFetch } from "../lib/client";
import type { Post } from "../schemas/post";

type GetBlogPostsOptions = {
  limit?: number;
  offset?: number;
  forDisplay?: boolean;
};

const getLatestBlogPostsQuery = ({
  limit = 5,
  forDisplay = true,
}: GetBlogPostsOptions) =>
  groq`
  *[_type == "post" && !(_id in path("drafts.**")) && publishedAt <= "${getDate().toISOString()}"
  && defined(slug.current)] | order(publishedAt desc)[0...${limit}] {
    _id,
    title,
    "slug": slug.current,
    "categories": categories[]->title,
    description,
    publishedAt,
    createdAt,
    readingTime,
    mainImage {
      _ref,
      asset->{
        url,
        ${
          forDisplay
            ? '"lqip": metadata.lqip, "dominant": metadata.palette.dominant,'
            : ""
        }
      }
    }
  }`;
export const getLatestBlogPosts = (options: GetBlogPostsOptions) =>
  clientFetch<Post[] | null>(getLatestBlogPostsQuery(options));
