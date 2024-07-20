import { Metadata } from "next";
import { Suspense } from "react";

import AboutMe from "@/public/img/about-me.png";

import AboutLoading from "./loading";

export const metadata: Metadata = {
  title: "I'm Tory Tang",
  description: `Highly motivated and experienced frontend developer with a strong
              background in JavaScript, React, and performance optimization.
              Proven track record of delivering high-impact projects with
              significant improvements in user experience, conversion rates, and
              R&D efficiency. Passionate about open-source technologies,
              collaborative development, and continuous learning. Committed to
              leveraging cutting-edge frontend technologies to drive innovation
              and excellence.`,
  openGraph: {
    title: "I'm Tory Tang",
    description: `Highly motivated and experienced frontend developer with a strong
              background in JavaScript, React, and performance optimization.
              Proven track record of delivering high-impact projects with
              significant improvements in user experience, conversion rates, and
              R&D efficiency. Passionate about open-source technologies,
              collaborative development, and continuous learning. Committed to
              leveraging cutting-edge frontend technologies to drive innovation
              and excellence.`,
    images: [
      {
        url: AboutMe.src,
      },
    ],
    type: "profile",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<AboutLoading />}>{children}</Suspense>;
}
