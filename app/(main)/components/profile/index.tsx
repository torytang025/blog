"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Avatar from "@/components/avartar";
import { SocialLink } from "@/components/link/social-link";

export default function Profile() {
  return (
    <div className="flex flex-col text-neutral-900 dark:text-neutral-200 md:items-end">
      <motion.div
        initial={{ opacity: 0, x: -45 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
        className="max-w-fit"
      >
        <Avatar large />
      </motion.div>
      <div className="mt-1 flex flex-col tracking-tight md:items-end">
        <motion.h2
          className="text-2xl font-bold lg:text-3xl"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 100,
            duration: 0.3,
          }}
        >
          Tory Tang
        </motion.h2>
        <motion.span
          className="flex flex-col whitespace-pre-wrap font-semibold md:items-end lg:mt-2 lg:text-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 85,
            duration: 0.3,
            delay: 0.1,
          }}
        >
          <span className="flex items-center md:justify-end">
            <span>I&apos;m a </span>
            <Dev />
          </span>
          <span className="flex items-center md:justify-end">
            a <Photographer />
            <span>, and a &nbsp;</span>
            <Vlogger />.
          </span>
        </motion.span>
        <motion.span
          className="mt-2"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            damping: 50,
            stiffness: 90,
            duration: 0.3,
            delay: 0.25,
          }}
        >
          <Social />
        </motion.span>
      </div>
    </div>
  );
}

function Dev() {
  return (
    <motion.span className="flex cursor-pointer select-none items-center">
      <span className="font-mono">&lt;</span>
      <span>Front-End</span>
      <span className="font-mono">/&gt;</span>
      <motion.span
        className="font-extrabold text-sky-400  dark:text-sky-600"
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      >
        |
      </motion.span>
    </motion.span>
  );
}

const Photographer = () => {
  const [isHover, setIsHover] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHover(false);
    }, 1000); // Set the duration according to your needs

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.span
      className="flex cursor-pointer select-none items-center"
      onHoverStart={() => {
        setIsHover(true);
      }}
      onHoverEnd={() => {
        setIsHover(false);
      }}
    >
      <span>Ph</span>
      <motion.svg
        className="h-6 w-6"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="initial"
        animate={isHover ? "hover" : "initial"}
        variants={{
          initial: {
            rotate: 0,
            scale: 1,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          },
          hover: {
            rotate: 360,
            scale: 1.5,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          },
        }}
      >
        <g clipPath="url(#clip0_116_92)">
          <path
            d="M127.233 110.308C145.856 117.358 170.923 116.073 186.883 107.25L200 100L186.883 92.7498C170.923 83.9274 145.857 82.6428 127.233 89.6916L113.267 94.9781C113.18 94.6967 113.075 94.4251 112.972 94.1516L126.546 88.0321C144.7 79.8479 161.515 61.2149 166.563 43.6907L170.711 29.2888L156.309 33.4367C138.785 38.4842 120.152 55.3 111.967 73.4535L106.057 86.5642C105.784 86.4316 105.511 86.3 105.229 86.1851L110.308 72.7665C117.357 54.1433 116.072 29.0767 107.25 13.1163L100 0L92.7498 13.1167C83.9274 29.0772 82.6428 54.1433 89.6916 72.767L94.7707 86.1856C94.4884 86.3005 94.2154 86.4321 93.9428 86.5646L88.0321 73.4539C79.8479 55.3005 61.2149 38.4846 43.6907 33.4372L29.2888 29.2893L33.4367 43.6912C38.4842 61.2149 55.3 79.8484 73.4535 88.0326L87.0274 94.1521C86.9247 94.4256 86.8191 94.6972 86.733 94.9786L72.7665 89.6921C54.1433 82.6428 29.0767 83.9279 13.1163 92.7502L0 100L13.1167 107.25C29.0772 116.073 54.1433 117.358 72.767 110.308L87.3861 104.775C87.5014 105.027 87.6172 105.28 87.747 105.524L73.454 111.968C55.3005 120.152 38.4847 138.785 33.4372 156.309L29.2893 170.711L43.6912 166.563C61.2149 161.516 79.8484 144.7 88.0326 126.547L94.6656 111.834C94.9107 111.936 95.1651 112.02 95.4172 112.109L89.6921 127.234C82.6428 145.857 83.9279 170.924 92.7502 186.884L100 200.001L107.251 186.884C116.073 170.924 117.358 145.858 110.309 127.234L104.583 112.108C104.835 112.02 105.09 111.936 105.335 111.833L111.968 126.546C120.152 144.7 138.785 161.515 156.309 166.563L170.711 170.711L166.563 156.309C161.516 138.785 144.7 120.152 126.547 111.967L112.253 105.524C112.383 105.28 112.499 105.027 112.614 104.774L127.233 110.308Z"
            fill="url(#paint0_linear_116_92)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_116_92"
            x1="177"
            y1="-9.23653e-06"
            x2="39.4993"
            y2="152.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B0B9FF" />
            <stop offset="1" stopColor="#E7E9FF" />
          </linearGradient>
          <clipPath id="clip0_116_92">
            <rect width="200" height="200" fill="white" />
          </clipPath>
        </defs>
      </motion.svg>
      <span>tographer</span>
    </motion.span>
  );
};

const Vlogger = () => {
  const [isHover, setIsHover] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHover(false);
    }, 1000); // Set the duration according to your needs

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.span
      className="flex cursor-pointer select-none items-center gap-x-1"
      onHoverStart={() => {
        setIsHover(true);
      }}
      onHoverEnd={() => {
        setIsHover(false);
      }}
    >
      <motion.svg
        className="h-5 w-5"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="initial"
        animate={isHover ? "hover" : "initial"}
        variants={{
          initial: {
            transform: "rotateY(0deg)",
            scale: 1,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          },
          hover: {
            transform: "rotateY(360deg)",
            scale: 1.5,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          },
        }}
      >
        <g clipPath="url(#clip0_238_1284)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M50 0H0V100C0 155.228 44.7715 200 100 200C155.228 200 200 155.228 200 100V0H150C122.386 0 100 22.3858 100 50C100 22.3858 77.6142 0 50 0Z"
            fill="url(#paint0_linear_238_1284)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_238_1284"
            x1="100"
            y1="0"
            x2="100"
            y2="200"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A7B5FF" />
            <stop offset="1" stopColor="#F3ACFF" />
          </linearGradient>
          <clipPath id="clip0_238_1284">
            <rect width="200" height="200" fill="white" />
          </clipPath>
        </defs>
      </motion.svg>
      <span>logger</span>
    </motion.span>
  );
};

const Social = () => {
  return (
    <motion.div className="flex gap-3">
      <SocialLink
        href="https://tory.cool/x"
        aria-label="My Twitter"
        platform="x"
      />
      <SocialLink
        href="https://tory.cool/youtube"
        aria-label="My YouTube"
        platform="youtube"
      />
      <SocialLink
        href="https://tory.cool/bilibili"
        aria-label="My Bilibili"
        platform="bilibili"
      />
      <SocialLink
        href="https://tory.cool/github"
        aria-label="My GitHub"
        platform="github"
      />
      <SocialLink
        href="mailto:torytang.025@gmail.com"
        aria-label="My Email"
        platform="mail"
      />
    </motion.div>
  );
};
