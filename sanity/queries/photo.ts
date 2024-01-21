import { groq } from "next-sanity";

import { getDate } from "@/utils/date";

import { clientFetch } from "../lib/client";
import { Photo } from "../schemas/photo";

const getPhotoQuery = groq`
  *[_type == "photo" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    publishedAt,
    image {
      _ref,
      asset->{
        url,
        "lqip": metadata.lqip,
        "exif": metadata.exif,
      }
    }
  }`;

export const getPhoto = (slug: string) =>
  clientFetch<Photo | undefined>(getPhotoQuery, { slug });

type GetPhotoListOptions = {
  limit?: number;
  offset?: number;
};

const getLatestPhotoListQuery = groq`
  *[_type == "photo" && !(_id in path("drafts.**")) && publishedAt <= "${getDate().toISOString()}"
  && defined(slug.current)] | order(publishedAt desc)[$offset...$offset+$limit] {
    _id,
    title,
    "slug": slug.current,
    description,
    publishedAt,
    image {
      _ref,
      asset->{
        url,
        "dimensions": metadata.dimensions,
        "lqip": metadata.lqip,
        "exif": metadata.exif,
      }
    }
}`;

export const getLatestPhotoList = (options: GetPhotoListOptions) =>
  clientFetch<Photo[] | null>(getLatestPhotoListQuery, {
    limit: options.limit || 5,
    offset: options.offset || 0,
  });
