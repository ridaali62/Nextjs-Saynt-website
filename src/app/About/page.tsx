"use client";
import React from "react";
import FlipCard from "../Components/FlipCard";
import craftingAiAnimation from "../lotties/craftingai-animation.json";
import Lottie from "react-lottie";
import newAnimation from "../lotties/new-animation.json";
import { motion } from "framer-motion";
import Lamp from "../Components/Lamp";

const About: React.FC = () => {
  const heroLottieConfig = {
    loop: true,
    autoplay: true,
    animationData: craftingAiAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const newLottieConfig = {
    loop: true,
    autoplay: true,
    animationData: newAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="bg-[#020617] overflow-clip relative z-40">
      <div className="h-96 w-40 bg-[#3DC3DA] rounded-full blur-[150px] absolute right-0"></div>
      <div className="h-96 w-40 bg-[#7EEAB6] rounded-full blur-[150px] absolute left-0 top-96"></div>
      
      <section className="flex flex-col items-center justify-center pt-[10%] mblres:pt-[100px] text-white">
        <motion.h1
          initial={{ opacity: 0, rotateX: -90 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="bg-gradient-to-b from-[#6CC8BE] mt-[8%] text-9xl font-bold to-[#3DC3DA] inline-block text-transparent bg-clip-text leading-tight text-left mblres:text-5xl mblres:text-center"
        >
          About Us
        </motion.h1>
        <p className="text-3xl text-center leading-relaxed p-14 font-body font-thin mblres:w-[100%] mblres:p-3 mblres:text-xl">
          Welcome to{" "}
          <span className="bg-gradient-to-b from-[#6CC8BE] to-[#3DC3DA] inline-block text-transparent bg-clip-text leading-tight text-left font-medium">
            SAYNT AI
          </span>
          , where cutting-edge technology meets everyday convenience. At SAYNT AI, we believe in the transformative power of artificial intelligence to revolutionize the way we live and work. Our mission is to seamlessly integrate top-of-the-line AI models into daily life, fostering a future where automation and autonomous operations are the norm, not the exception.
        </p>
      </section>

      <section className="h-full p-6 flex flex-col items-center justify-center w-full mt-44 mblres:mt-24">
        <h1 className="text-white font-bold text-6xl mblres:text-5xl mblres:text-center">
          What does SAYNT do?
        </h1>

        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-row items-center justify-around w-full mt-24 mblres:flex-col">
            <div className="text-white flex flex-col items-start mblres:items-center justify-center gap-12 relative">
              <div className="bg-[#6CC8BE] h-24 w-36 rounded-full -top-4 absolute -rotate-45 -left-[100px] blur-[50px] z-0" />
              <h1 className="text-[#3DC3DA] text-6xl font-bold z-20 mblres:text-4xl mblres:text-center">
                Crafting AI
              </h1>
              <p className="text-white text-[36px] text-medium max-w-[400px] font-body font-thin leading-[45px] mblres:text-2xl mblres:text-center">
                We have curated a family of handcrafted models that work together to provide us with the maximum yield for AI-based solutions.
              </p>
            </div>

            <div className="max-w-[500px]">
              <Lottie options={heroLottieConfig} />
            </div>
          </div>

          <div className="flex flex-row items-center justify-around w-full mt-24 mblres:flex-col-reverse">
            <div className="max-w-[500px]">
              <Lottie options={newLottieConfig} />
            </div>

            <div className="text-white flex flex-col items-start mblres:items-center justify-center gap-12 relative">
              <div className="bg-[#3DC3DA] h-24 w-36 rounded-full bottom-4 absolute -rotate-45 left-[300px] mblres:right-[0px] blur-[50px] z-0" />
              <h1 className="text-[#3DC3DA] text-6xl font-bold mblres:text-3xl">
                Innovation Through AI
              </h1>
              <p className="text-white text-[36px] text-medium max-w-[400px] font-body font-thin leading-[45px] mblres:m-auto mblres:text-2xl mblres:text-center">
                With our in-depth Research and Development process, we bring to light innovative solutions that cater our products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-[5%] py-12 flex flex-col mt-36 mblres:w-[100%] mblres:px-0">
        <h1 className="text-white font-bold text-6xl text-center my-24 mblres:text-5xl mblres:px-0 mblres:m-8">
          Our Values
        </h1>

        <div className="flex flex-row items-center justify-center gap-6 mblres:gap-20 mblres:w-[100%] mblres:flex-col md:flex-wrap">
          <FlipCard
            title="S"
            backTitle="Solutions"
            description="Emphasizing the practical, problem-solving aspect of our company. This company is not just about ideas; it is about implementing solutions that work."
          />
          <FlipCard
            title="A"
            backTitle="Artificial Intelligence"
            description="At the core of our operations, AI is the driving force behind our products and services, enabling innovative and forward-thinking solutions."
          />
          <FlipCard
            title="Y"
            backTitle="Yield"
            description="Representing the productivity and effectiveness of our solutions. Our company is focused on yielding tangible results, improvements, and efficiencies through AI."
          />
          <FlipCard
            title="N"
            backTitle="Novelty"
            description="Highlighting innovation and uniqueness of our offerings, our approach to AI solutions brings new perspectives and capabilities to the table, differentiating us in the market."
          />
          <FlipCard
            title="T"
            backTitle="Technology"
            description="The foundation of our company, reflecting the advanced technological frameworks and methodologies you employ to develop AI solutions."
          />
        </div>
      </section>

      <div className="mblres:hidden">
        <Lamp />
      </div>

      <div className="font-body flex flex-col items-center justify-center">
        <motion.h2
          className="text-white/[0.6] font-body font-semibold tracking-[2px] p-2 text-center text-5xl z-40 mblres:text-5xl mblres:mt-[10%] mblres:text-white"
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Mission.
        </motion.h2>

        <motion.p
          className="text-white font-thin p-6 mblres:pt-2 mblres:pb-0 text-center text-3xl mx-[100px] mblres:mx-6 z-40 mblres:w-[100%] mblres:text-xl"
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          "At Saynt, our mission is to revolutionize daily life through the seamless integration of state-of-the-art AI technologies, empowering individuals to thrive in their personal and professional endeavors. Our AI-driven solutions are designed to cater to the day-to-day needs of users, offering innovative tools and insights to enhance productivity, foster personal growth, and navigate daily life with confidence."
        </motion.p>
      </div>

      <div>
        <img src="/Footer.png" alt="Footer" className="w-full" />
      </div>
    </div>
  );
};

export default About;
