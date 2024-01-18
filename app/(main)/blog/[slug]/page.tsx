import { type Metadata } from "next";
import { notFound } from "next/navigation";
import Balancer from "react-wrap-balancer";

import { Container } from "@/components/container";
import { getBlogPost } from "@/sanity/queries/post";

import { PostPortableText } from "../../_components/portable-text/post-portable-text";
import { BlogPostTableOfContents } from "../../_components/table-of-content";

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

  // let views: number;
  // if (env.VERCEL_ENV === "production") {
  //   views = await redis.incr(kvKeys.postViews(post._id));
  // } else {
  //   views = 30578;
  // }

  // let reactions: number[] = [];
  // try {
  //   if (env.VERCEL_ENV === "production") {
  //     const res = await fetch(url(`/api/reactions?id=${post._id}`), {
  //       next: {
  //         tags: [`reactions:${post._id}`],
  //       },
  //     });
  //     const data = await res.json();
  //     if (Array.isArray(data)) {
  //       reactions = data;
  //     }
  //   } else {
  //     reactions = Array.from({ length: 4 }, () =>
  //       Math.floor(Math.random() * 50000)
  //     );
  //   }
  // } catch (error) {
  //   console.error(error);
  // }

  // let relatedViews: number[] = [];
  // if (typeof post.related !== "undefined" && post.related.length > 0) {
  //   if (env.VERCEL_ENV === "development") {
  //     relatedViews = post.related.map(() => Math.floor(Math.random() * 1000));
  //   } else {
  //     const postIdKeys = post.related.map(({ _id }) => kvKeys.postViews(_id));
  //     relatedViews = await redis.mget<number[]>(...postIdKeys);
  //   }
  // }

  return (
    // <BlogPostPage
    //   post={post}
    //   // views={views}
    //   // relatedViews={relatedViews}
    //   // reactions={reactions.length > 0 ? reactions : undefined}
    // />
    <Container className="mt-12 lg:mt-16">
      <div className="w-full md:flex md:justify-center lg:relative">
        <aside className="hidden w-1/6 shrink-0 lg:block">
          <div className="sticky top-2 pt-20">
            <BlogPostTableOfContents headings={post.headings} />
          </div>
        </aside>
        <article className="prose dark:prose-invert" data-postid={post._id}>
          <header>
            <h1>
              <Balancer>{post.title}</Balancer>
            </h1>
          </header>
          <section>
            <PostPortableText value={post.body} />
          </section>
        </article>
      </div>
      <div className="mt-12 lg:mt-16" />
    </Container>
  );
}

export const revalidate = 60;
