import React from "react";
import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Driven Sustainability",
  description:
    "How Saynt AI designs resource-conscious models that scale without scaling their environmental footprint.",
};

const SayntBlog: React.FC = () => {
  return (
    <div className="bg-[#020617] overflow-clip relative z-40 h-full">
      <div className="flex flex-col items-center ">
        <img
          src="/Productline1.png"
          alt="line1"
          className="absolute top-0 left-auto right-auto mblres:hidden block  "
        />
      </div>
      <section className="flex justify-between mx-[10%]  mblres:mx-0 bg-gradient-to-bl from-[#204b4d]  via-[#124c5b]  to-[#133452]  rounded-[30px] pt-5 pl-5 mt-32 h-[400px] mblres:h-[180px] mblres:justify-start relative z-42">
        <p className="text-[61px] text-gray-400 font-body font-medium mblres:text-3xl">
          Engineering
        </p>
      </section>
      <section className="mx-[280px] mblres:mx-6 md:mx-[10%] my-16 text-pretty">
        <h1 className="text-[64px] text-white font-bold font-body leading-[70px] mb-10 mblres:text-[30px] mblres:leading-[30px]">
          AI Driven Sustainability
        </h1>
        <div className="flex place-items-center gap-3">
          <img src="logo.png" alt="Logo" />
          <div>
            <p className="text-[32px] text-gray-400 font-body font-bold leading-[32px] mblres:text-xl mblres:leading-normal">
              Team Saynt AI
            </p>
            <p className="text-[24px] text-gray-400 font-body font-medium mblres:text-base">
              July 10, 2024
            </p>
          </div>
        </div>
        <p className="text-[24px] text-gray-400 font-body font-medium mblres:text-base my-10 mblres:my-5">
          Bigger models aren&apos;t always better models. Every parameter we add
          costs compute, energy, and money to train and serve, so at Saynt AI
          we treat efficiency as a design constraint from day one rather than
          an afterthought we optimize later.
        </p>
        <p className="text-[24px] text-gray-400 font-body font-medium mblres:text-base">
          That mindset shapes how we build our family of handcrafted models:
          we&apos;d rather ship a smaller model tuned tightly to a real problem
          than a general-purpose model that wastes cycles on cases our users
          will never hit.
        </p>
        <p className="text-[32px] text-white font-body font-semibold mblres:text-xl my-10 mblres:my-5">
          Smaller, focused models
        </p>
        <p className="text-[24px] text-gray-400 font-body font-medium mblres:text-base">
          Instead of routing every request through one large model, we break
          problems down and route them to smaller specialized models where
          possible. This keeps inference fast and cheap, which matters just
          as much for your electricity bill as it does for ours.
        </p>
        <p className="text-[32px] text-white font-body font-semibold mblres:text-xl my-10 mblres:my-5">
          Efficient training pipelines
        </p>
        <p className="text-[24px] text-gray-400 font-body font-medium mblres:text-base">
          We reuse and fine-tune existing checkpoints wherever we can instead
          of training from scratch, and we track the compute cost of every
          experiment so our research process stays accountable to the same
          efficiency bar as our products.
        </p>
        <p className="text-[32px] text-white font-body font-semibold mblres:text-xl my-10 mblres:my-5">
          Measuring what matters
        </p>
        <p className="text-[24px] text-gray-400 font-body font-medium mblres:text-base">
          Accuracy without efficiency isn&apos;t a complete answer. As we grow
          Saynt AI and ConnectEd, we&apos;re committed to reporting on the
          resource cost of our models alongside their performance, so
          sustainability stays part of the conversation, not a footnote.
        </p>
      </section>
      <div>
        <img src="/Footer.png" alt="Footer" className="w-full" />
      </div>
    </div>
  );
};
export default SayntBlog;
