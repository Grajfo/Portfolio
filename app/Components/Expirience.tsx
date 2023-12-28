import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

interface Details {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}
const Details = (det: Details) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto 
    flex flex-col items-center justify-center
    md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3
          className="capitalize font-bold
        text-2xl sm:text-xl xs:text-lg"
        >
          {det.position}{" "}
          <a
            href={det.companyLink}
            target="_blank"
            className="text-primary  dark:text-primaryDark capitalize"
          >
            @{det.company}
          </a>
        </h3>
        <span
          className="capitalize font-medium text-dark/75 dark:text-light/75
        xs:text-sm"
        >
          {det.time} | {det.address}
        </span>
        <p className="font-medium w-full md:text-sm">{det.work}</p>
      </motion.div>
    </li>
  );
};

function Expirience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2
        className="font-bold text-8xl mb-32 w-full text-center
      md:text-6xl xs:text-4xl md:mb-16"
      >
        Expirience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
        md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul
          className="w-full flex flex-col items-start justify-between ml-4
        xs:ml-2"
        >
          <Details
            position="Frontend Developer and helper"
            company="Turistična kmetija Jelinčič - kamp Jelinc, Ana Jelinčič S.P"
            companyLink="https://kmetijakampjelincic.si/"
            time="Jun. 2022 - Oct. 2023"
            address="soča 50, Bovec"
            work="Designed and Developed a appealing website leveraging a tech stack that includes HTML, CSS, JavaScript, React,
            Tailwind CSS, TypeScript and Bootstrap. This comprehensive solution not only showcases my skills effectively but
            also enhances the overall user experience. The website serves as a tool for attracting new customers and providing
            them with information.
            Maintaining and updating the website with new trends and better performance and technical help."
          />

          <Details
            position="Wordpress Developer (Freelancer)"
            company="PartyLand"
            companyLink="https://partyland.si/"
            time="Oct. 2022 - Apr.2023"
            address="Maribor, Slovenia"
            work={`Designed e-commerce website using Elementor, complemented by custom CSS and HTML.
            Developed online store using WordPress and integrating WooCommerce to handle e-commerce functionalities.
            Carefully chose plugin and php customization to enhanced site's capabilities.
            Maintaining and updating the website to ensure optimal performance and security
            `}
          />
          <Details
            position="Practical traning"
            company="Flawless code"
            companyLink="https://flawless-code.com/flawlesscode-slovenija/"
            time="Mar. 2019 - May 2019"
            address="Maribor, Slovenia"
            work=" Developed a mobile game in unity based on old arcade games.
            Developed RESTful API using .Net Core integrated with MySql server to simulate the meal preparation process for
            hospital setting.
            Developed a program to serialize the ”drumkit.xml file for their music sample folder and it also provides the
            capability to deserialize an existing ”drumkit.xml” file back into class representation"
          />
        </ul>
      </div>
    </div>
  );
}

export default Expirience;
