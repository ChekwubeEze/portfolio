import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left  md:flex-row max-w-7xl justify-evenly items-center mx-auto px-10">
      <h2 className="absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500 md:pl-0 pl-4">
        About
      </h2>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        src="./images/delete.jpg"
        className="-mb-20 md:mb-0 mt-[70px] md:mt-0   flex-shrink-0 w-[170px] h-[170px] rounded-full object-cover md:rounded-lg md:h-96 md:w-64 xl:w-[400px] xl:h-[450px]"
      />
      <div className="space-y-4 px-0 md:px-10  mt-[10px]">
        <h4 className=" text-2xl md:text-3xl font-semibold">
          Here is a
          <span className="underline decoration-[orange]"> little </span>
          About me
        </h4>
        <p className="text-base">
          I&apos;m a software engineer with over six years of professional experience in backend development, microservices, and cloud-based systems. I am currently studying Game Development at Jyväskylä University of Applied Sciences, Finland, where I continue to strengthen my technical foundation while expanding my expertise in real-time and interactive systems.

          <br>

          </br>
          I have worked across the FinTech, AI, and energy sectors, building and maintaining enterprise-level applications using C#, ASP.NET Core, Python, JavaScript, Azure, Docker, Kubernetes, and SQL. These roles involved rebuilding legacy systems, optimizing performance, collaborating in Agile teams, and delivering reliable production software.
          <br>

          </br>
          Alongside my industry experience, I apply strong engineering principles through game development, working with Unity, C#, and C++. I have developed multiple games and published one on itch.io, bringing a performance-focused and structured approach to gameplay systems and technical architecture.
          <br>

          </br>
          I&apos;m passionate about writing clean, scalable code, solving complex problems, and continuously improving systems. I am seeking opportunities where I can contribute as a software engineer within collaborative, high-performing teams.

        </p>
      </div>
    </div>
  );
};

export default About;
