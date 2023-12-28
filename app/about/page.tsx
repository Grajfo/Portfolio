"use client";
import AnimatedText from "../Components/AnimatedText";
import Image from "next/image";
import profilePic from "../../public/images/Portfolio_omeni.jpg";
import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Skills from "../Components/Skills";
import Expirience from "../Components/Expirience";
import Education from "../Components/Education";

const AnimatedNumbers = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

export default function page() {
  return (
    <>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <div
          className="pt-16 w-full h-full inline-block z-0 bg-light dark:bg-dark p-32
        xl:p-24 lg-p-16 md:p12 sm:p-8"
        >
          <AnimatedText
            text="Navigating the Path of Development Excellence!"
            className="mb-16 
          lg:!text-7xl sm:!text-6xl xs:text-4xl sm:mb-8"
          />
          <div
            className="grid w-full grid-cols-8 gap-16 
          sm:gap-8 justify-center"
          >
            <div
              className="col-span-3 flex flex-col items-start justify-start
            xl:col-span-4 md:order-2 lg:col-span-8 md:col-span-8 lg:order-2"
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                O meni
              </h2>
              <p className="font-medium">
                Greetings! I&apos;m Zan Grajfoner, a dynamic 27-year-old
                software engineer based in the picturesque city of Maribor. At
                the intersection of passion and profession, I find my stride in
                the ever-evolving realm of software development. Armed with a
                relentless pursuit of excellence and a perfectionist mindset, I
                navigate the intricate landscape of coding and problem-solving
                with enthusiasm .
              </p>
              <p className="my-4 font-medium">
                My journey in the world of software engineering is fueled by an
                insatiable appetite for diverse challenges. Every problem is an
                opportunity, and I thrive on unraveling complex puzzles with
                innovative solutions. The commitment to continuous learning and
                knowledge enhancement is not just a professional ethos but a
                personal philosophy that propels me forward in this fast-paced
                and ever-changing field.
              </p>
              <p className="my-4 font-medium">
                Versatility is my forte. Whether tackling projects independently
                or collaborating within a dynamic team environment, I bring a
                multifaceted skill set to the table. I believe in the power of
                collaboration, understanding that diverse perspectives and
                collective efforts lead to groundbreaking results.
              </p>
              <p className="my-4 font-medium">
                Beyond the lines of code and development milestones, I find
                solace and inspiration in the great outdoors. Hiking through
                scenic landscapes, running to the rhythm of nature, maintaining
                fitness, and indulging in immersive video game experiences are
                among my cherished pursuits. These endeavors not only provide
                balance to my professional life but also serve as a wellspring
                of creativity and rejuvenation.
              </p>
              <p className="font-medium">
                In every aspect of my journey, from lines of code to outdoor
                adventures, I am fueled by a passion for pushing boundaries and
                discovering new horizons. Join me on this odyssey of perpetual
                growth, where the pursuit of excellence is not just a
                destination but a way of life.
              </p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 borderd-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1
            lg:col-span-8 md:col-span-8 lg:order-1"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="profile"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="( max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div
              className="col-span-2 flex flex-col items-end justify-between 
            xl:col-span-8 xl:flex-row xl:items-center md:order-3 lg:order-3 "
            >
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span
                  className="inline-block text-7xl font-bold 
                md:text-6xl sm:text-5xl xs:text-4xl"
                >
                  <AnimatedNumbers value={5} />
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Satisfied customers
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span
                  className="inline-block text-7xl font-bold
                md:text-6xl sm:text-5xl xs:text-4xl"
                >
                  <AnimatedNumbers value={8} />
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Projects
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span
                  className="inline-block text-7xl font-bold
                md:text-6xl sm:text-5xl xs:text-4xl"
                >
                  <AnimatedNumbers value={2} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Years of expirinece
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Expirience />
          <Education />
        </div>
      </main>
    </>
  );
}
