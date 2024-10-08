import React from "react";
import "../globals.css";

const Career: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#23453f] from-8% via-[#020617] via-20% to-[#020617] to-100% overflow-clip relative z-40">
    <div className="flex flex-col items-center">
      <img
        src="/Productline1.png"
        alt="line1" 
        className="absolute top-0 w-full mblres:hidden block  "
      />
    </div>
    <section className="flex mx-[10%]  items-end justify-between flex-row mt-20 mblres:items-center mblres:mt-20 mblres:mr-0 mblres:mx-[10%] relative  mblres:flex-col-reverse mblres:pl-0 mblres:pt-5 ">
      <div className="flex flex-col items-start mblres:w-[100%] mblres:items-center mblres:justify-center">
        <img
          src="/Productline4.png"
          alt="line4"
          className="absolute left-0  mblres:block hidden"
        />
        <h3 className="text-white text-[40px] font-body font-medium text-balance w-[80%] leading-[50px]  text-start mblres:text-xl mblres:w-[100%] mblres:text-center md:w-[100%]">
          You can start and elevate your skills with our
        </h3>
        <h3 className=" text-[40px] font-body font-medium text-transparent bg-clip-text bg-gradient-to-l from-[#3DC3DA] to-[#7EEBB6] leading-[50px]  text-start mblres:text-xl mblres:w-[100%] mblres:text-center">
          progressive employment..
        </h3>
        <div className="flex flex-col ml-[200px] items-end">
          <img src="/arrow.png" alt="Arrow" className="block mblres:hidden" />
        </div>
        <div className="text-[30px] bg-gradient-to-l from-[#3DC3DA] to-[#7EEBB6] py-2 px-3  text-white font-medium rounded-xl w-fit mt-0  mblres:mt-2 mblres:text-2xl">
          Get Started
        </div>
      </div>
      <img src="/Career.png" alt="ConnectEd" className="mt-10 md:w-[50%]" />
    </section>
    <section className="mt-[120px]">
      <div className="w-fit flex flex-col m-auto">
        <h2 className="text-center  text-white text-[64px] font-body font-bold mblres:text-3xl">
          This is how we work!
        </h2>
        <p className="bg-gradient-to-r from-[#020617] from-10% via-[#478567] to-[#7EEBB6] h-[4px]"></p>
      </div>

      <div className="flex px-[10%] gap-10 mt-5 justify-center mb-20 bg-double py-[100px] flex-row mblres:items-center items-start mblres:py-[50px] mblres:flex-col ">
        <div className="flex flex-col items-start w-full max-w-sm  mblres:items-center">
          <img src="/Earth.png" alt="Earth" />
          <h4 className="text-white text-[32px] font-body font-bold py-5">
            Power to Our People
          </h4>
          <p className="text-white text-[20px] font-body font-medium text-balance mblres:text-center">
            We claim ownership of our work. We have a shared commitment to
            accomplish great things. We seek what is best for Saynt AI and
            take responsibility when we fall short.
          </p>
        </div>
        <div className="flex flex-col items-start w-full max-w-sm mblres:items-center">
          <img src="/Bulb.png" alt="Bulb" />
          <h4 className="text-white text-[32px] font-body font-bold py-5">
            Embracing diversity
          </h4>
          <p className="text-white text-[20px] font-body font-medium text-balance mblres:text-center">
            We believe that diversity fosters true innovation. From
            experienced bankers to fresh graduates, the team works together
            from more than 10 countries, bringing our unique strengths to the
            table.
          </p>
        </div>
        <div className="flex flex-col items-start w-full max-w-sm mblres:items-center">
          <img src="/Heart.png" alt="Heart" />
          <h4 className="text-white text-[32px] font-body font-bold py-5">
            Raising the bar
          </h4>
          <p className="text-white text-[20px] font-body font-medium text-balance mblres:text-center">
            Solving hard problems requires relentless innovation. We
            constantly challenge ourselves to higher standards because our
            work is going to have incredible impact.
          </p>
        </div>
      </div>
    </section>
    <section className="mblres:w-[100%] mblres:flex-col">
      <div className="w-fit flex flex-col m-auto">
        <h2 className=" text-white text-[48px] font-body font-bold mblres:text-[40px]">
          Job Openings
        </h2>
        <p className="bg-gradient-to-r from-[#020617] from-10% via-[#478567] to-[#7EEBB6] h-[4px] mblres:h-0"></p>
      </div>

      <ul className="bg-[#484848] rounded-t-3xl text-white text-[24px] font-medium gap-10 font-body flex flex-row mx-auto py-2 px-3 my-20 mblres:items-center items-start mblres:w-[60%] mblres:flex-col mblres:gap-5  w-fit">
        <li>Post Name</li>
        <li>Post Details</li>
        <li>Post Requirements</li>
        <li>Last Date</li>
        <li>Apply Here</li>
      </ul>
    </section>
    <div>
      <img src="/Footer.png" alt="Footer" className="w-full" />
    </div>
  </div>
);
};
export default Career;
