import { groq } from "next-sanity";

import { getDate } from "@/utils/date";

import { clientFetch } from "../lib/client";
import type { Post } from "../schemas/post";

type GetBlogPostsOptions = {
  limit?: number;
  offset?: number;
};

const getLatestBlogPostsQuery = groq`
  *[_type == "post" && !(_id in path("drafts.**")) && publishedAt <= "${getDate().toISOString()}"
  && defined(slug.current)] | order(publishedAt desc)[0+$offset...$limit] {
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
        "lqip": metadata.lqip,
        "dominant": metadata.palette.dominant,
      }
    }
  }`;
export const getLatestBlogPosts = (options: GetBlogPostsOptions) =>
  clientFetch<Post[] | null>(getLatestBlogPostsQuery, {
    limit: options.limit || 5,
    offset: options.offset || 0,
  });
