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
          I&apos;m a game developer and software engineer currently studying Game Development at Jyväskylä University of Applied Sciences, Finland. With a strong background in programming and over six years of professional experience in backend development, microservices, and cloud architecture, I bring a highly technical and structured approach to creating interactive experiences.

          <br>

          </br>
          My journey into game development began after years of building enterprise-level applications in the FinTech, AI, and energy sectors, where I worked with technologies such as C#, ASP.NET Core, Python, JavaScript, Azure, Docker, Kubernetes, and more. These roles strengthened my ability to design scalable systems, optimize performance, collaborate within Agile teams, and deliver high-quality software.
          <br>

          </br>
          As I transitioned into game creation, I began applying these engineering principles to gameplay systems, mechanics, and technical game architecture. I have developed several games and published one on itch.io, focusing on merging creativity with clean, efficient code. My skill set spans C#, Unity, Python, and C++, allowing me to move comfortably between gameplay programming, tools development, and system design.
          <br>

          </br>
          I&apos;m passionate about crafting engaging player experiences, exploring game AI, and building systems that feel smooth, responsive, and meaningful. Each project is an opportunity to experiment, learn, and push the boundaries of what I can create.
          <br>

          </br>
          Driven by curiosity and a commitment to continuous improvement, I aim to build games that are both technically strong and emotionally impactful experiences that players enjoy, remember, and return to.
        </p>
      </div>
    </div>
  );
};

export default About;
