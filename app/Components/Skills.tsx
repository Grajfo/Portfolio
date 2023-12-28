// Importing motion from the framer-motion library for animations
import { motion } from "framer-motion";

// Skill component receives name, x, and y as props to display a skill with animation
const Skill = ({ name, x, y, className }: { name: string; x: string; y: string ; className?: string }) => {
  return (
    // Animated div using framer-motion with dynamic styling based on props
    <motion.div
      className={`flex items-center justify-center rounded-full font-semibold
        bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute  dark:text-dark dark:bg-light
        lg:py-2 lg:px4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
        xs:text-dark xs:dark:text-light xs:font-bold invisible ${className}`}
      // Hover animation to scale the div
      whileHover={{ scale: 1.05 }}
      // Initial and in-view animations with dynamic positioning
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      // Transition duration for the animations
      transition={{ duration: 1.5 }}
      // Trigger animation only once when element comes into the viewport
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

// Skills component rendering a set of animated skills with a circular background
function Skills() {
  return (
    <>
      {/* Heading for the skills section */}
      <h2
        className="font-bold text-8xl mt-64 w-full text-center
    md:text-6xl md:mt-32"
      >
        Skills
      </h2>

      {/* Container for the animated skills with a circular background */}
      <div
        className="w-full h-screen relative flex items-center 
    justify-center rounded-full bg-circularLight dark:bg-circularDark
    lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
    lg:bg-circularLightLg lg:dark:bg-circularDarkLg 
    md:bg-circularLightMd md:dark:bg-circularDarkMd
    sm:bg-circularLightSm sm:dark:bg-circularDarkSm
    xs:bg-circularLightSm xs:dark:bg-circularDarkSm"
      >
        {/* Static div for the "Web" category */}
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold
        bg-dark text-light p-8 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
        lg:p-6 md:p-4 xs:text-xs xs:p-2
        "
          // Hover animation to scale the div
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        {/* Individual Skill components with specific names and positions */}
        <Skill className="!visible lg:!invisible" name="HTML" x="-4vw" y="-6vw" />
        <Skill className="!visible lg:!invisible" name="CSS" x="4vw" y="-6vw" />
        <Skill className="!visible lg:!invisible" name="C#" x="4vw" y="6vw" />
        <Skill className="!visible lg:!invisible" name="PYTHON" x="-4vw" y="6vw" />
        <Skill className="!visible lg:!invisible" name="SQL" x="-12vw" y="-7vw" />
        <Skill className="!visible lg:!invisible" name="NOSQL" x="-12vw" y="7vw" />
        <Skill className="!visible lg:!invisible" name=".NET" x="-10vw" y="0vw" />
        <Skill className="!visible lg:!invisible" name="NEXT.JS" x="10vw" y="0vw" />
        <Skill className="!visible lg:!invisible" name="Angular" x="20vw" y="0vw" />
        <Skill className="!visible lg:!invisible" name="TAILWIND CSS" x="15vw" y="10vw" />
        <Skill className="!visible lg:!invisible" name="BOOTSTRAP" x="-15vw" y="-10vw" />
        <Skill className="!visible lg:!invisible" name="UNITY" x="30vw" y="5vw" />
        <Skill className="!visible lg:!invisible" name="WORDPRESS" x="20vw" y="20vw" />
        <Skill className="!visible lg:!invisible" name="WEBFLOW" x="-20vw" y="-20vw" />
        <Skill className="!visible lg:!invisible" name="PHP" x="20vw" y="-20vw" />
        <Skill className="!visible lg:!invisible" name="R" x="-20vw" y="20vw" />
        <Skill className="!visible lg:!invisible" name="ENTITY FRAMEWORK" x="-20vw" y="0vw" />
        <Skill className="!visible lg:!invisible" name="REACT" x="0vw" y="-10vw" />
        <Skill className="!visible lg:!invisible" name="GODOT" x="-30vw" y="5vw" />
        <Skill className="!visible lg:!invisible" name="LINQ" x="-30vw" y="0vw" />
        <Skill className="!visible lg:!invisible" name="NODE.JS" x="-0vw" y="-17vw" />
        <Skill className="!visible lg:!invisible" name="NUMPY" x="0vw" y="10vw" />
        <Skill className="!visible lg:!invisible" name="PANDAS" x="-10vw" y="15vw" />
        <Skill className="!visible lg:!invisible"name="FRAMER MOTION" x="13vw" y="-15vw" />
        <Skill className="!visible lg:!invisible"name="JQUERY" x="27vw" y="-10vw" />
        <Skill className="!visible lg:!invisible"name="FIGMA" x="0vw" y="20vw" />
        <Skill className="!visible lg:!invisible"name="Git" x="-10vw" y="-19vw" />

        <Skill className="lg:!visible" name="HTML" x="-8vw" y="-9vw" />
        <Skill className="lg:!visible" name="CSS" x="8vw" y="-9vw" />
        <Skill className="lg:!visible" name="C#" x="0vw" y="18vw" />
        <Skill className="lg:!visible" name="PYTHON" x="-15vw" y="20vw" />
        <Skill className="lg:!visible" name="SQL" x="-16vw" y="-20vw" />
        <Skill className="lg:!visible" name=".NET" x="-10vw" y="6vw" />
        <Skill className="lg:!visible" name="NEXT.JS" x="20vw" y="0vw" />
        <Skill className="lg:!visible" name="Angular" x="20vw" y="20vw" />
        <Skill className="lg:!visible" name="TAILWIND CSS" x="20vw" y="-20vw" />
        <Skill className="lg:!visible" name="WORDPRESS" x="0vw" y="35vw" />
        <Skill className="lg:!visible" name="REACT" x="0vw" y="-18vw" />
        <Skill className="lg:!visible" name="LINQ" x="-20vw" y="0vw" />
        <Skill className="lg:!visible" name="NODE.JS" x="-0vw" y="-35vw" />
        




      </div>
    </>
  );
}

// Exporting the Skills component as the default export
export default Skills;
