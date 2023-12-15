"use client";

import Image from "next/image";
import profilePic from "../public/images/test-pic.jpg";
import AnimatedText from "./Components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "./Components/Iconst";
import HireMe from "./Components/HireMe";
import lightBulb from "../public/light-bulb.png";
import Head from "next/head";


export default function Home() {
  return (
    <>
    <Head>
    <title>Grajfo | projects Page</title>
    <meta name="description" content="any description" />
  </Head>

    <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
      <div
        className="pt-0 w-full h-full inline-block z-0 bg-light dark:bg-dark p-32
        xl:p-24 lg-p-16 md:p12 sm:p-8 md:pt-16 sm:pt-8"
      >
        <div className="flex items-center justify-between w-full lg:flex-col">
          <div className="w-1/2 md:w-full">
            <Image
              src={profilePic}
              alt="Something"
              className="w-full, h-auto rounded-full lg:hidden md:inline-block
              md:w-full"
              priority
              sizes="( max-width: 768px) 100vw,
           (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
            <AnimatedText
              text="Turning Vision Into Reality With Code And Design. 
          "
              className="!text-6xl !text-left 
            xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
            />
            <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center self-start mt-2 lg:self-center">
              <Link
                href="/Zan-Grajfoner-CV-2023.pdf"
                target={"_blank"}
                className="flex items-center bg-dark text-light p-2.5 px-6 
            rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2
            border-solid border-transparent hover:border-dark
            dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
            hover:dark:border-light
            md:p-2 md:px-4 md:text-base"
                download={true}
              >
                Resume <LinkArrow className={"w-8 ml-1"} />
              </Link>

              <Link
                href="mailto:zan.grajfoner.1996@gmail.com"
                target={"_blank"}
                className="ml-4 text-lg font-medium capitalize text-dark underline 
            hover:no-underline dark:text-light 
            md:text-base"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        <HireMe />
        <div className="absolute right-8 bottom-20 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="Grajfo" className="w-full, h-auto" />
        </div>
      </div>
    </main>
    </>
  );
}
