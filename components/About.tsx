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
          I&apos;m a software engineer with over six years of professional experience designing, building, and maintaining scalable backend systems, microservices, and cloud-based applications. I am currently studying Game Development at Jyväskylä University of Applied Sciences, Finland, where I continue to strengthen my technical skills while expanding into interactive systems and real-time application development.

          <br>

          </br>
          My professional background spans the FinTech, AI, and energy sectors, where I have contributed to enterprise-level solutions using technologies such as C#, ASP.NET Core, Python, JavaScript, Azure, Docker, Kubernetes, SQL, and modern CI/CD pipelines. I have worked in Agile environments, collaborated closely with cross-functional teams, rebuilt legacy systems, and delivered reliable, high-performance software used in production environments.
          <br>

          </br>
          In addition to my industry experience, I bring a strong systems-thinking mindset from game development. Working with Unity, C#, and C++ has further sharpened my understanding of performance optimization, real-time processing, clean architecture, and maintainable code—skills that translate directly to building robust software systems. I have developed multiple games and published one on itch.io, applying the same engineering discipline I use in professional software projects.
          <br>

          </br>
          I&apos;m passionate about writing clean, testable, and scalable code, solving complex problems, and continuously improving both systems and processes. Whether working on backend services, cloud infrastructure, or interactive applications, I focus on delivering solutions that are efficient, reliable, and aligned with business goals.
          <br>

          </br>
          Driven by curiosity, adaptability, and a strong work ethic, I am seeking opportunities in Finland where I can contribute as a software engineer, grow within a collaborative team, and help build impactful, high-quality software.
        </p>
      </div>
    </div>
  );
};

export default About;
