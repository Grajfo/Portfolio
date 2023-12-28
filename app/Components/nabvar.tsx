"use client";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  SunIcon,
  MoonIcon,
} from "./Iconst";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

interface Podatki {
  link: string;
  title?: string;
  className?: string;
  toggle?: () => void;
}

const CustomLink = (podatki: Podatki) => {
  const pathname = usePathname();

  return (
    <Link
      href={podatki.link}
      className={`${podatki.className} relative group`}
      scroll={false}
    >
      {podatki.title}

      <span
        className={`h-1 inline-block 
    bg-dark absolute left-0 -bottom-0.5
    group-hover:w-full transition-[width] ease duration-300
    ${
      pathname === podatki.link ? "w-full" : "w-0"
    } dark:text-light dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const MobileCustomLink = (podatki: Podatki) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    if (typeof podatki.toggle === "function") {
      podatki.toggle();
    }

    router.push(podatki.link);
  };

  return (
    <button
      className={`${podatki.className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {podatki.title}

      <span
        className={`h-1 inline-block 
    bg-light absolute left-0 -bottom-0.5
    group-hover:w-full transition-[width] ease duration-300
    ${
      pathname === podatki.link ? "w-full" : "w-0"
    } dark:text-light dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

export default function Nabvar() {
  const [isOpen, setiSOpen] = useState(false);

  const handleClick = () => {
    setiSOpen(!isOpen);
  };

  const [mode, setMode] = useThemeSwitcher();
  return (
    <header
      className="w-full px-32 py-8 font-medium 
    flex items-center justify-between dark:text-light relative z-10 
    lg:px-16 md:px-12 sm:px-8"
    >
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 
      ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 
      ${isOpen ? "opacity-0" : "opacity-100"}`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 
      ${isOpen ? "-rotate-45 -translate-y-1" : "-translate-y0.5"}`}
        ></span>
      </button>

      {/*desktop menu*/}
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink {...{ link: "/", title: "Home", className: "mr-4" }} />
          <CustomLink
            {...{ link: "/about", title: "About", className: "mx-4" }}
          />
          <CustomLink
            {...{ link: "/projects", title: "Projects", className: "mx-4" }}
          />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="/"
            target="_blank"
            className="w-6 mr-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon />
            {/*<Image src="./svgs/Twitter.svg" alt="Follow us on Twitter" width={32} height={32}></Image>*/}
          </motion.a>
          <motion.a
            href="/"
            target="_blank"
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="/"
            target="_blank"
            className="w-6 ml-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
          <button
            onClick={() => setMode(mode === "" ? "dark" : "")}
            className={`ml-3 flex items-center justify-center rounded-full p-1
        ${mode === "" ? "bg-dark text-light" : "bg-light text-dark"}`}
          >
            {mode === "dark" ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </div>

      {/*mobile menu*/}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center 
    fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
    bg-dark/90 dark:bg-light/90 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <MobileCustomLink
              {...{
                link: "/",
                title: "Home",
                className: "",
                toggle() {
                  handleClick();
                },
              }}
            />
            <MobileCustomLink
              {...{
                link: "/about",
                title: "About",
                className: "",
                toggle() {
                  handleClick();
                },
              }}
            />
            <MobileCustomLink
              {...{
                link: "/projects",
                title: "Projects",
                className: "",
                toggle() {
                  handleClick();
                },
              }}
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-2 ">
            <motion.a
              href="/"
              target="_blank"
              className="w-6 mr-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <TwitterIcon />
              {/*<Image src="./svgs/Twitter.svg" alt="Follow us on Twitter" width={32} height={32}></Image>*/}
            </motion.a>
            <motion.a
              href="/"
              target="_blank"
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="/"
              target="_blank"
              className="w-6 ml-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>
            <button
              onClick={() => setMode(mode === "" ? "dark" : "")}
              className={`ml-3 flex items-center justify-center rounded-full p-1
        ${mode === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}
            >
              {mode === "dark" ? (
                <SunIcon className="fill-dark" />
              ) : (
                <MoonIcon className="fill-dark" />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}
