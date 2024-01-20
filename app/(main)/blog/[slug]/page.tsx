import dayjs from "dayjs";
import { type Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Balancer from "react-wrap-balancer";

import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { getBlogPost } from "@/sanity/queries/post";

import { PostPortableText } from "../../components/portable-text/post-portable-text";
import { BlogPostTableOfContents } from "../../components/table-of-content";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const post = await getBlogPost(params.slug);
  if (!post) {
    notFound();
  }

  const { title, description, mainImage } = post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: mainImage.asset.url,
        },
      ],
      type: "article",
    },
    twitter: {
      images: [
        {
          url: mainImage.asset.url,
        },
      ],
      title,
      description,
      card: "summary_large_image",
      site: "@thecalicastle",
      creator: "@thecalicastle",
    },
  } satisfies Metadata;
};

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const { headings, _id, title, createdAt, categories, body, mainImage } = post;

  return (
    <Container className="mt-12 lg:mt-16">
      <div className="w-full md:flex md:justify-center lg:relative">
        <aside className="hidden w-1/6 shrink-0 lg:block">
          <div className="sticky top-2 pt-20">
            <BlogPostTableOfContents headings={headings} />
          </div>
        </aside>
        <article className="prose dark:prose-invert" data-postid={_id}>
          <header>
            <div className="mb-12">
              <div className="relative aspect-[240/135] w-full">
                <Image
                  src={mainImage.asset.url}
                  alt={title}
                  className="select-none rounded-2xl ring-1 ring-zinc-900/5 transition dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 md:rounded-3xl"
                  placeholder="blur"
                  blurDataURL={mainImage.asset.lqip}
                  unoptimized
                  fill
                />
              </div>
            </div>
            <h1>
              <Balancer>{title}</Balancer>
              <div className="mt-2 flex items-center gap-x-2">
                <span className="text-sm text-neutral-500 dark:text-neutral-300">
                  {dayjs(createdAt).format("MMMM D")}
                </span>
                {categories?.length && (
                  <>
                    {categories.map((category, ind) => (
                      <Badge key={category + ind} variant="secondary">
                        {"# " + category}
                      </Badge>
                    ))}
                  </>
                )}
              </div>
            </h1>
          </header>
          <section>
            <PostPortableText value={body} />
          </section>
        </article>
      </div>
      <div className="mt-12 lg:mt-16" />
    </Container>
  );
}

export const revalidate = 60;
