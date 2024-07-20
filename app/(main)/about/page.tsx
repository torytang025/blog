import { Playfair_Display_SC } from "next/font/google";
import Link from "next/link";

import { Container } from "@/components/container";
import { ExternalLinkIcon, GitHubIcon } from "@/components/icon";
import { RichLink } from "@/components/link/rich-link";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/utils";

const pds = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: true,
  style: ["normal", "italic"],
});

export default async function PhotoPage() {
  return (
    <Container>
      <header className="mt-6 flex items-end justify-between px-4 font-light md:px-0">
        <div className="flex items-center gap-x-4">
          {/* <div id="logo">T</div> */}
          <div>
            <div className={cn(pds.className, "text-xl font-medium")} id="name">
              Tory Tang
            </div>
            <div id="job">Software Engineer</div>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <div>torytang.025@gmail.com</div>
        </div>
      </header>
      <Separator className="mt-2" />
      <article className="prose w-full max-w-none justify-between gap-x-4 px-4 dark:prose-invert prose-h1:mb-0 prose-h1:text-4xl prose-h1:font-bold prose-p:mb-2 prose-p:mt-0 prose-strong:font-semibold prose-ul:mt-0 md:flex md:px-0">
        <section className="flex basis-2/5 flex-col" id="left-col">
          <section className="mt-6" id="about">
            <HeadWithDashSeparator>About</HeadWithDashSeparator>
            <p>
              Highly motivated and experienced frontend developer with a strong
              background in JavaScript, React, and performance optimization.
              Proven track record of delivering high-impact projects with
              significant improvements in user experience, conversion rates, and
              R&D efficiency. Passionate about open-source technologies,
              collaborative development, and continuous learning. Committed to
              leveraging cutting-edge frontend technologies to drive innovation
              and excellence.
            </p>
          </section>
          <section className="mt-6" id="skills">
            <HeadWithDashSeparator>Skills</HeadWithDashSeparator>
            <p>
              <strong>Programming Languages</strong>
              <br />
              <span>JavaScript, TypeScript, HTML, CSS, Python.</span>
            </p>
            <p>
              <strong>Frontend Development</strong>
              <br />
              <span>
                React, NextJS, Redux, Recoil, TailwindCSS, Styled-Components,
                LESS.
              </span>
            </p>
            <p>
              <strong>Backend Development</strong>
              <br />
              <span>NodeJS, KoaJS, PostgreSQL, DrizzleORM.</span>
            </p>
            <p>
              <strong>Development Tools</strong>
              <br />
              <span>
                Vite, Vitest, Jest, Git, GitHub Action, Postman, Charles, Figma.
              </span>
            </p>
          </section>
          <section className="mt-6" id="education">
            <HeadWithDashSeparator>Education</HeadWithDashSeparator>
            <p>Huazhong University of Science and Technology</p>
            <p className="italic">
              Bachelor’s Degree in Business Administration
            </p>
            <p className="italic">Sep 2017 - Jul 2021 </p>
          </section>
        </section>
        <section className="flex basis-3/5 flex-col" id="right-col">
          <section className="mt-6" id="experience">
            <HeadWithDashSeparator>Experience</HeadWithDashSeparator>
            <section id="experience-bytedance-global-payment">
              <section>
                <div className="text-xl font-medium">
                  ByteDance - Global Payment
                </div>
                <div className="italic">
                  Frontend Software Engineer, 2020 - Present
                </div>
              </section>
              <Separator className="my-2 w-10 bg-neutral-600" />
              <section>
                Maintained a global payment system, enabling robust payment
                processing for applications with over one million daily active
                users, including TikTok Shop, TikTok Live, and Capcut.
                <ul>
                  <li>
                    Spearheaded the refactor of a payment interaction
                    subproject, resulting in
                  </li>
                  <ul>
                    <li>
                      <span className="underline decoration-dashed underline-offset-4">
                        Increase of 3 percentage points
                      </span>{" "}
                      in Transaction Conversion Rates (TCR)
                    </li>
                    <li>
                      <span className="underline decoration-dashed underline-offset-4">
                        Increase of 2 percentage points
                      </span>{" "}
                      in Payment Success Rates (PSR)
                    </li>
                    <li>
                      <span className="underline decoration-dashed underline-offset-4">
                        76% reduction
                      </span>{" "}
                      in First Contentful Paint (FCP)
                    </li>
                    <li>
                      <span className="underline decoration-dashed underline-offset-4">
                        65% reduction
                      </span>{" "}
                      in Largest Contentful Paint (LCP)
                    </li>
                  </ul>
                  <li>
                    Led the creation of a design system, optimizing interaction
                    experience and achieving:
                  </li>

                  <ul>
                    <li>
                      <span className="underline decoration-dashed underline-offset-4">
                        10% increase
                      </span>{" "}
                      in R&D efficiency
                    </li>
                    <li>
                      <span className="underline decoration-dashed underline-offset-4">
                        Increase of 7 percentage points
                      </span>{" "}
                      in Payment Success Rates (PSR)
                    </li>
                    <li>
                      Recognized with a Business Breakthrough Award, which is an
                      award given to employees who have made significant impact
                      on the business’s growth.
                    </li>
                  </ul>

                  <li>
                    Engineered a comprehensive event reporting and monitoring
                    system,{" "}
                    <span className="underline decoration-dashed underline-offset-4">
                      raising the alarm coverage rate by 23%
                    </span>{" "}
                    and ensuring critical online issues are alerted{" "}
                    <span className="underline decoration-dashed underline-offset-4">
                      within 10 minutes.
                    </span>
                  </li>
                </ul>
              </section>
            </section>
            <section
              id="experience-bytedance-public-opinion-system"
              className="mt-8"
            >
              <Separator className="my-2 w-10 bg-neutral-600" />
              <section>
                <div className="text-xl font-medium">
                  ByteDance - Public Opinion System
                </div>
                <div className="italic">
                  Frontend Software Engineer, Dec 2021 - Jul 2022
                </div>
              </section>
              <Separator className="my-2 w-10 bg-neutral-600" />
              Built public opinion monitoring system, enhancing PR strategies
              with data-driven insights through advanced visualization and
              analytics tools.
              <ul>
                <li>
                  Designed and implemented a dynamic form system,{" "}
                  <span className="underline decoration-dashed underline-offset-4">
                    saving approximately 4-5 person-months of R&D manpower
                  </span>{" "}
                  for each new template requirement.
                </li>
                <li>
                  Optimized application performance by implementing split
                  chunking, dynamic imports, and tree shaking, resulting in{" "}
                  <span className="underline decoration-dashed underline-offset-4">
                    30% reduction in initial load size.
                  </span>
                </li>
                <li>
                  Facilitated the project’s transition from Webpack to Vite,
                  improving the development experience.
                </li>
              </ul>
            </section>
          </section>
          <section className="mt-6" id="projects">
            <HeadWithDashSeparator>Projects</HeadWithDashSeparator>
            <section id="project-ui-component-with-design-tokens">
              <section id="ui-component-with-design-tokens-header">
                <div className="inline-flex items-center gap-x-2 text-xl font-medium">
                  UI Components with Design Tokens
                  <Link href="https://github.com/torytang025/ezreal-ui">
                    <GitHubIcon />
                  </Link>
                </div>
                <div className="italic">
                  Design Tokens, GitHub Action, NPM, Figma
                </div>
              </section>
              <Separator className="my-2 w-10 bg-neutral-600" />
              <ul>
                <li>
                  Explored a design token system to enhance collaboration
                  between developers and designers,{" "}
                  <span className="underline decoration-dashed underline-offset-4">
                    streamlining the creation and maintenance of theme-based UI
                    components.
                  </span>
                </li>
                <li>
                  Authored{" "}
                  <RichLink href="/blog/intro-build-a-token-system-for-ui-component-lib">
                    a series of blog posts
                  </RichLink>{" "}
                  on building a design token system for UI component libraries,
                  contributing valuable insights in the field.
                </li>
              </ul>
            </section>
            <section id="project-react-rebuild" className="mt-8">
              <Separator className="my-2 w-10 bg-neutral-600" />
              <section>
                <div className="inline-flex items-center gap-x-2 text-xl font-medium">
                  React Rebuild
                  <Link href="https://github.com/torytang025/react-rebuild">
                    <GitHubIcon />
                  </Link>
                </div>
                <div className="italic">
                  Fiber, Reconciliation, Virtual DOM, Hooks
                </div>
              </section>
              <Separator className="my-2 w-10 bg-neutral-600" />
              <ul>
                <li>
                  React-Rebuild is an open-source project replicating React 18
                  with TypeScript, recreating key features like fiber
                  architecture, reconciliation, and Hooks to understand React’s
                  inner workings.
                </li>
                <li>
                  Wrote{" "}
                  <RichLink href="/blog/understanding-react-part-0-introduction">
                    a blog series
                  </RichLink>{" "}
                  offering insights into React’s inner workings and enhancing
                  frontend development skills.
                </li>
              </ul>
            </section>
            <section id="project-pomodoro-timer" className="mt-8">
              <Separator className="my-2 w-10 bg-neutral-600" />
              <section id="project-pomodoro-timer-header">
                <div className="inline-flex items-center gap-x-2 text-xl font-medium">
                  Pomodoro Timer Web App
                  <Link href="https://www.torytang.com/pomodoro">
                    <ExternalLinkIcon />
                  </Link>
                </div>
                <div className="italic">
                  NextJS, React, Recoil, TailwindCSS, Figma
                </div>
              </section>
              <Separator className="my-2 w-10 bg-neutral-600" />
              <p>
                Designed and developed a Pomodoro Timer web application
                featuring sleek UI/UX design, seamless interactive elements, and
                complete functionalities, like a Pomodoro Timer and task
                management.
              </p>
            </section>
            <section id="project-personal-blog" className="mt-8">
              <Separator className="my-2 w-10 bg-neutral-600" />
              <section id="project-personal-blog-header">
                <div className="inline-flex items-center gap-x-2 text-xl font-medium">
                  Personal Blog
                  <Link href="/">
                    <ExternalLinkIcon />
                  </Link>
                </div>
                <div className="italic">
                  NextJS, React, TailwindCSS, Headless CMS
                </div>
              </section>
              <Separator className="my-2 w-10 bg-neutral-600" />
              <p>
                Authored technical posts on frontend development, focusing on
                React, TypeScript, and modern web technologies, sharing
                insights, improving skills, and staying updated with industry
                trends.
              </p>
            </section>
          </section>
        </section>
      </article>
      <Separator className="mb-12 mt-4" />
    </Container>
  );
}

function HeadWithDashSeparator({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <h1
        className={cn(
          pds.className,
          "first-letter:text-5xl first-letter:italic"
        )}
      >
        {children}
      </h1>
      <Separator className="my-2 w-10 bg-neutral-600" />
    </div>
  );
}
