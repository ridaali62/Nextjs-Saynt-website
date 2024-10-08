import React from "react";
import "../globals.css";
import Link from "next/link";
import Article from "../Components/Article";
import { CiSearch } from "react-icons/ci";

// Define the component
const Blog: React.FC = () => {
  return (
    <div className="bg-[#020617] overflow-clip relative z-40">
      <div className="flex flex-col items-center w-full">
        <img
          src="/Productline1.png"
          alt="line1"
          className="absolute top-0 left-auto right-auto mblres:hidden block w-full"
        />
      </div>
      <section className="flex justify-between items-between mx-[10%] bg-gradient-to-bl from-[#204b4d] via-[#124c5b] to-[#133452] rounded-[30px] pt-10 mt-32 flex-row relative z-45 mblres:w-[100%] mblres:flex-col-reverse mblres:mx-0 mblres:justify-center">
        <div className="flex flex-col gap-4 ml-10 mb-10">
          <h1 className="text-[64px] text-white font-bold font-body mblres:text-[30px] mblres:text-4xl mblres:mt-3">
            Saynt AI Blogs
          </h1>
          <p className="text-[32px] text-gray-400 font-body font-medium mblres:text-[20px]">
            Read Study and Unite
          </p>
        </div>
        <picture className="flex flex-col mblres:items-end items-start mblres:mr-0 ">
          <source srcSet="/Blog2.png" media="(max-width: 767px)" />
          <source srcSet="/Blog.png" media="(min-width: 768px)" />
          <img src="/Blog.png" alt="Blog" />
        </picture>
      </section>
      <section className="mt-16 mx-[10%] mblres:mx-5 mblres:flex-col">
        <div className="flex justify-between gap-10 flex-row mblres:flex-col">
          <div className="bg-blogAI w-full p-5 pb-2 min-w-[300px] h-[500px] mblres:h-[400px] flex flex-col justify-between shadow-four-sides rounded-[30px] mblres:rounded-3xl">
            <h2 className="text-white text-[43.96px] font-bold font-body w-[200px] mblres:text-[200%]">
              AI Driven Sustainability
            </h2>
            <p className="text-right underline decoration-white decoration-2 text-white text-[32px] font-semibold font-body">
              Read More
            </p>
          </div>
          <div className="bg-bloggrowth bg-cover w-full p-5 pb-2 h-[500px] min-w-[300px] mblres:h-[400px] flex flex-col justify-between shadow-four-sides rounded-[30px] mblres:rounded-3xl">
            <h2 className="text-white text-[43.96px] font-bold font-body w-[200px]">
              Nurturing Growth
            </h2>
            <p className="text-right underline decoration-white decoration-2 text-white text-[32px] font-semibold font-body">
              Read More
            </p>
          </div>
        </div>
        <div className="bg-blogexcellence bg-no-repeat min-w-[300px] w-full p-5 pb-2 h-[500px] mblres:h-[400px] flex flex-col justify-between shadow-four-sides rounded-[30px] mblres:rounded-3xl mt-10 mblres:bg-cover bg-cover">
          <h2 className="text-white text-[43.96px] font-bold font-body w-[200px] mblres:text-[200%]">
            Engineering Excellence
          </h2>
          <p className="text-right underline decoration-white decoration-2 text-white text-[32px] font-semibold font-body">
            Read More
          </p>
        </div>
      </section>
      <section className="mx-[10%] mblres:mx-10 mt-20 mb-14">
        <div className="max-w-fit mb-16 mblres:mb-10 flex flex-col w-fit mblres:mx-auto">
          <h2 className="text-white text-[44.68px] font-bold font-body text-center mblres:text-[200%]">
            All Articles
          </h2>
          <p className="bg-gradient-to-r from-[#020617] from-10% via-[#478567] to-[#7EEBB6] h-[4px]"></p>
        </div>
        <div className="flex gap-5 shadow-four-sides w-lg rounded-2xl p-3 mblres:w-[100%] mblres:mx-0 mblres:items-center">
          <CiSearch className="text-[#7EEBB6] h-[42px] w-[42px]" />
          <input
            type="text"
            name="search"
            id="search"
            className="bg-transparent text-white text-[24px] font-body font-medium focus:outline-none"
            placeholder="Search Here"
          />
        </div>
        <div className="flex w-full gap-10 text-center mt-10 justify-center">
          <div className="text-white text-[24px] font-bold font-body bg-[#7EEBB6] rounded-xl p-2 w-full">
            All
          </div>
          <div className="text-white text-[24px] font-bold font-body border-t border-[3px] border-[#7EEBB6] rounded-xl p-2 w-full">
            All
          </div>
          <div className="text-white text-[24px] font-bold font-body border-t border-[3px] border-[#7EEBB6] rounded-xl p-2 w-full">
            All
          </div>
          <div className="text-white text-[24px] font-bold font-body border-t border-[3px] border-[#7EEBB6] rounded-xl p-2 w-full">
            All
          </div>
          <div className="text-white text-[24px] font-bold font-body border-t border-[3px] border-[#7EEBB6] rounded-xl p-2 w-full mblres:hidden block">
            All
          </div>
          <div className="text-white text-[24px] font-bold font-body border-t border-[3px] border-[#7EEBB6] rounded-xl p-2 w-full mblres:hidden block">
            All
          </div>
          <div className="text-white text-[24px] font-bold font-body border-t border-[3px] border-[#7EEBB6] rounded-xl p-2 w-full mblres:hidden block">
            All
          </div>
          <div className="text-white text-[24px] font-bold font-body border-t border-[3px] border-[#7EEBB6] rounded-xl p-2 w-full mblres:hidden block">
            All
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 place-items-center gap-16 mx-[10%] mblres:mx-5 mb-20 mblres:grid-cols-1">
        <Article img="/article1.png" />
        <Article img="/article2.png" />
        <Article img="/article1.png" />
        <Article img="/article2.png" />
      </section>
      <div>
        <img src="/Footer.png" alt="Footer" className="w-full" />
      </div>
    </div>
  );
};

export default Blog;
