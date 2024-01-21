import { defineField, defineType } from "sanity";
import { z } from "zod";

import { apiVersion } from "../env";

const Photo = z.object({
  _id: z.string(),
  image: z.object({
    _ref: z.string(),
    asset: z.object({
      url: z.string(),
      lqip: z.string().optional(),
      dominant: z
        .object({
          background: z.string(),
          foreground: z.string(),
        })
        .optional(),
      dimensions: z.object({
        width: z.number(),
        height: z.number(),
      }),
      exif: z.object({
        DateTimeOriginal: z.string(),
        LensMake: z.string().optional(),
        LensModel: z.string(),
        ISO: z.number(),
        FocalLength: z.number(),
        ExposureTime: z.number(),
        FNumber: z.number(), // Aperture
      }),
    }),
  }),
  publishedAt: z.string(),
  shotAt: z.string().optional(),
  slug: z.string(),
  title: z.string().optional(),
  description: z.string().optional(),
});
export type Photo = z.infer<typeof Photo>;

export default defineType({
  name: "photo",
  title: "Photo",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        metadata: ["blurhash", "lqip", "palette", "exif"],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: async (slug, context) => {
          const { document, getClient } = context;
          if (!document) return true;
          const client = getClient({ apiVersion });
          const id = document._id.replace(/^drafts\./, "");
          const params = {
            draft: `drafts.${id}`,
            published: id,
            slug,
          };
          const query = `!defined(*[!(_id in [$draft, $published]) && slug.current == $slug][0]._id)`;
          const result = await client.fetch(query, params);
          return result;
        },
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
