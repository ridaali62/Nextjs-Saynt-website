import React from "react";
import "../globals.css";

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#23453f] from-8% via-[#020617] via-20% to-[#020617] to-100% overflow-clip relative z-40 mblres:w-[100%] mblres:justify-center mblres:px-3">
      <div className="flex flex-col items-center">
        <img
          src="/line1.png"
          alt="line1"
          className="absolute top-0 left-auto right-auto mblres:hidden md:hidden block"
        />
      </div>
      <section className="flex flex-col justify-center items-center relative pt-[12%]">
        <img
          src="/line2.png"
          alt="line2"
          className="absolute top-0 mblres:hidden md:hidden block"
        />
        <img
          src="/line4.png"
          alt="line4"
          className="absolute left-0 top-1/2 mblres:hidden md:hidden block"
        />
        <img
          src="/line5.png"
          alt="line5"
          className="absolute right-0 top-1/2 mblres:hidden md:hidden block"
        />

        <h2 className="flex font-body font-medium gap-3 text-[13px] items-center bg-clip bg-clip-text text-transparent bg-gradient-to-r from-[#3DC3DA] to-[#7EEBB6] mblres:text-xl mblres:text-center">
          <img src="/Union.png" alt="Union" className="h-6 w-6" />
          <p className="tracking-[6px]">WELCOME TO SAYNT</p>
        </h2>
        <h1 className="text-[110px] bg-clip-text text-transparent bg-gradient-to-b from-[#3DC3DA] to-[#7EEBB6] font-extrabold font-body leading-[90px] mb-4  mblres:text-2xl">
          SAYNT AI
        </h1>
        <p className="font-body font-light text-[20px] text-white w-[40%] text-center mb-5 tracking-[1px] mblres:w-[100%]">
          Welcome to SAYNT AI, where we connect AI into daily life. We achieve
          strides to make everyday life easier.
        </p>
        <img src="/lumina.png" alt="lumina" className="w-2/5 z-10" />
      </section>
      <section className="flex flex-col justify-center items-center mt-16  mx-[5%]">
        <h2 className="text-[#E5F5D8] text-[80px] font-bold mblres:text-2xl">
          What makes our AI, AI.
        </h2>
        <div className="flex justify-between items-center w-[80%] ml-12 bg-[url('/shade.png')] bg-contain bg-no-repeat my-0 mblres:flex-col mblres:mt-4 mblres:justify-center">
          <div>
            <h2 className="text-[#3DC3DA] text-[48px] font-body font-bold mblres:text-4xl">
              Innovation
            </h2>
            <p className="text-[#E5F5D8] text-[36px] font-thin font-body tracking-[1px] text-pretty leading-[45px] w-[80%] mblres:text-xl mblres:w-[100%] md:w-full md:text-sm">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiuxsod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam”
            </p>
          </div>
          <img
            src="/Lightbulb.png"
            alt="Lightbulb"
            className="h-full w-full md:w-[50%]"
          />
        </div>
      </section>
      <section className="bg-[url('/shade2.png')] bg-left bg-no-repeat py-14">
        <div className="flex justify-between items-center w-[100%] px-[120px] gap-[200px] mblres:w-[100%] mblres:flex-col-reverse mblres:h-[100%] mblres:gap-3">
          <img
            src="/Shield.png"
            alt="Shield"
            className="p-4 h-full w-full md:w-[50%]"
          />
          <div>
            <h2 className="text-[#3DC3DA] text-[48px] font-body font-bold mblres:text-5xl">
              Accuracy
            </h2>
            <p className="text-[#E5F5D8] text-[36px] font-thin font-body tracking-[1px] text-pretty leading-[45px] w-[80%] mblres:text-sm mblres:w-[100%] md:w-full md:text-sm mblres:mt-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiuxsod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam”
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col mt-16 mx-[150px] bg-gradient-to-br from-[#205174] from-0% via-[#020617] via-47% to-[#0F243D] to-99% px-20 py-10 rounded-[30px] border-t-2 border-b-2 border-t-[#3DC3DA] border-b-[#7EEBB6] shadow-custom-bottom mb-20 mblres:w-[100%] mblres:mx-0 mblres:m-4 mblres:px-2">
        <div className="flex justify-between mb-5 mblres:flex-col-reverse md:flex-col-reverse mblres:w-[100%] md:w-[100%]">
          <div className="w-[50%] mblres:w-[100%] mblres:items-center md:w-[100%] md:items-center">
            <h2 className="text-[50px] font-medium font-body text-white leading-[51px] mb-4 mblres:text-xl mblres:w-[100%] md:w-[100%] mblres:mt-12 md:mt-12 mblres:text-center md:text-center">
              “Unlock tomorrow with AI today.
            </h2>
            <p className="text-[26px] font-thin font-body text-white tracking-[1px] text-pretty leading-[32px] mblres:w-[100%] mblres:text-sm">
              Thank you for being part of our journey, Here at SAYNT, we're
              revolutionizing the future with cutting-edge AI technology. Our
              innovative solutions are designed to empower businesses, enhance
              experiences, and drive unparalleled growth. Together, let’s shape
              a smarter, more efficient world.”
            </p>
          </div>

          <img
            src="/robot.png"
            alt="robot"
            className="pt-8 h-full mblres:w-[100%]"
          />
        </div>
        <div className="bg-gradient-to-r from-[#3DC3DA] to-[#7EEBB6]  h-[1px]"></div>
        <div className="flex gap-2 items-center mt-5">
          <div className="bg-white rounded-full h-12 w-12"></div>
          <div>
            <h3 className="text-[25px] font-bold font-body text-white mblres:text-sm">
              Syed Ali Hassan
            </h3>
            <p className="text-[15px] font-thin font-body text-white mblres:text-sm">
              CEO, Saynt AI (Pvt) Ltd.
            </p>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className=" flex items-center mb-20 mx-[150px] pt-12 mblres:w-[100%] mblres:justify-center mblres:mx-0"
      >
        <div className="flex justify-between w-full mblres:justify-center items-center mblres:flex-col md:flex-col mblres:w-[100%]">
          <img src="Mail.png" alt="Mail Image" className="h-full" />
          <div className="h-fit bg-gradient-to-bl from-[#113649] from-0% via-[#0C283A] via-50% to-[#050c16] to-99%  p-10 rounded-[30px] shadow-left-bottom text-white w-[500px] mblres:w-[100%] mblres:p-5">
            <h2 className="text-5xl font-bold text-[#3DC3DA] mblres:text-3xl">
              Contact Us
            </h2>
            <p className="text-md mt-2 md:mb-6 text-white font-thin w-[50%] mblres:w-[100%]">
              Reach us out, let's build the future together.
            </p>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-lg font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 bg-transparent border border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3DC3DA]"
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-lg font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 bg-transparent border border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3DC3DA]"
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white text-lg py-3 px-5 bg-gradient-to-r from-[#3DC3DA] to-[#7EEBB6]  font-bold rounded-lg hover:from-[#7EEBB6] hover:to-[#3DC3DA]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <div>
        <img src="/Footer.png" alt="Footer" className="w-full mblres:w-[100%]" />
      </div>
    </div>
  );
};

export default Home;
