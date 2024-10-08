import React from "react";
import "../globals.css";

const Product: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#23453f] from-8% via-[#020617] via-20% to-[#020617] to-100% overflow-clip relative z-40">
      <div className="flex flex-col items-center   ">
        <img
          src="/Productline1.png"
          alt="line1"
          className="absolute top-0 w-full mblres:hidden block "
        />
      </div>
      <section className='flex items-center pl-[120px] flex-row mblres:flex-col bg-none  pb-[0px] pt-[0px] mt-20 mblres:pb-[440px] mblres:bg-bottom mblres:bg-no-repeat mblres:bg-[url("/Productbg2.png")] mblres:bg-contain mblres:pl-0 relative mblres:w-[100%] mblres:mt-10  '>
        <div className="flex flex-col items-start mblres:items-center pb-0 pt-[10%] relative justify-center mblres:flex-col ">
          <h3 className="w-[80%] pb-5 font-medium font-body text-[48px] text-pretty text-transparent bg-clip-text bg-gradient-to-b from-[#3DC3DA] to-[#7EEBB6] leading-[45px] text-start mblres:text-center mblres:text-[30px] mblres:leading-[30px] md:w-[100%] md:text-2xl  ">
            ENHANCE YOUR LEARNING JOURNEY FROM TEXTBOOK TO MASTERY
          </h3>
          <p className="w-[80%] text-white text-[25px] text-balance font-thin font-body tracking-[1px] text-start mblres:text-center mblres:text-[18px] pb-[140px]  mblres:text-xl mblres:w-[90%] md:w-[100%] md:text-xl ">
            ConnectEd empowers students by transforming their textbooks into
            interactive study guides. Our advanced AI tutor breaks down your
            learning material into easily digestible chapters and generates
            insightful summaries, all designed to optimize your study sessions.
            <br />
            Get started with ConnectEd
          </p>
          <img
            src="/Productline4.png"
            alt="line4"
            className="absolute bottom-0 w-full mblres:block hidden  "
          />
        </div>
        <img
          src="/Productbg1.png"
          alt="Product"
          className=" h-full block mblres:hidden md:w-[60%]"
        />
        <img
          src="/Productline2.png"
          alt="line2"
          className="absolute bottom-0 left-0 mblres:hidden block  "
        />
      </section>
      <section className='flex items-center justify-between py-[120px] bg-[url("/shade3.png")] bg-right bg-no-repeat ml-[80px] pr-[5%]  flex-row relative mblres:w-[100%] mblres:flex-col mblres:ml-6 '>
        <img src="/Productlumina.png" alt="Lumina" className='md:w-[50%]'/>
        <div className="flex flex-col items-start w-[48%] pt-[50px] pr-[50px] mblres:w-[100%] mblres:pr-0 mblres:items-center    ">
          <h3 className="pb-5 font-medium font-body text-[45px] text-pretty text-transparent bg-clip-text bg-gradient-to-r from-[#3DC3DA] to-[#7EEBB6] leading-[43px] mblres:text-4xl md:w-[100%] md:text-3xl">
            Automate Your Study Process with AI
          </h3>
          <p className="text-white text-[25px] text-balance font-thin font-body tracking-[1%] mblres:text-xl mblres:w-[90%] md:w-[100%] md:text-xl">
            Kick off your study sessions with Lumina’s intelligent automation.
            Simply upload your textbooks, and let our AI models do the rest.
            Lumina will: <br />
            <br />
            Break down textbooks into chapters Generate summaries for each
            chapter Create flashcards for quick revision Administer randomized
            tests to check comprehension Provide a notes section for personal
            insights and annotations
          </p>
        </div>
        <img
          src="/Productline3.png"
          alt="line3"
          className="absolute right-0 mblres:hidden block  "
        />

      </section>
      <section className="">
        <div className="w-fit flex flex-col m-auto ">
          <h2 className="font-medium text-[73.5px] text-center text-transparent bg-clip-text bg-gradient-to-r from-[#33F0FF] to-[#3DC3DA] leading-[73px] mblres:w-[100%] mblres:text-3xl md:text-6xl">
            Study Effortlessly with ConnectEd
          </h2>
          <p className="bg-gradient-to-r from-[#020617] from-10% via-[#478567] to-[#7EEBB6] h-[2px] mblres:h-0 md:h-0"></p>
        </div>
        <div className="flex items-center justify-between ml-[100px] pr-[100px] flex-row  mblres:flex-col mblres:ml-0 mblres:w-[100%] mblres:pr-0">
          <img src="/KidsReading.png" alt="Study" className="md:w-[60%] md:h-[50%]" />
          <div className="flex flex-col w-[40%]  pt-[50px] items-start mblres:items-center mblres:w-[100%] md:w-[100%]">
            <h3 className="pb-5 font-medium font-body text-[45px] text-balance text-transparent bg-clip-text bg-gradient-to-r from-[#3DC3DA] to-[#7EEBB6] leading-[43px] text-start mblres:text-center mblres:w-[100%] mblres:text-4xl">
              Any Subject, Any Level
            </h3>
            <p className="text-white text-[25px] text-balance  font-thin font-body tracking-[1px] text-start  mblres:w-[100%]  mblres:text-center">
              Whether you're tackling complex calculus or mastering medieval
              history, Lumina supports textbooks across various subjects and
              levels.
            </p>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-between ml-[230px] flex-row  mblres:w-[100%] mblres:flex-col-reverse mblres:ml-0 md:ml-[10%] ">
        <div className="flex flex-col w-[40%] pt-[50px]  items-start mblres:items-center  mblres:w-[100%] md:w-[100%]">
          <h3 className="pb-5 font-medium font-body text-[45px] text-balance text-transparent bg-clip-text bg-gradient-to-r from-[#3DC3DA] to-[#7EEBB6] leading-[43px] text-start  mblres:text-center">
            Interactive Flashcards
          </h3>
          <p className="text-white text-[25px] text-balance font-thin font-body tracking-[1px] text-start mblres:text-center">
            Reinforce learning with flashcards designed to help you remember key
            concepts and terms..
          </p>
        </div>
        <img
          src="/FlashCards.png"
          alt="Study"
          className="h-[700px] w-[800px] mblres:w-[100%] md:w-[60%] md:h-[50%]"
        />
      </section>
      <section className="flex items-center justify-between mx-[100px]  flex-row  mblres:w-[100%] mblres:flex-col mblres:mx-0 md:mx-[10%] ">
        <img src="/Tests.png" alt="Test" className="h-[550px] w-[700px] md:w-[60%] md:h-[50%]" />
        <div className="flex flex-col items-start  w-[40%] pb-[100px] mblres:w-[100%] md:w-[100%]">
          <h3 className="pb-5 font-medium font-body text-[40px] text-balance text-transparent bg-clip-text bg-gradient-to-r from-[#3DC3DA] to-[#7EEBB6] leading-[43px] text-start mblres:w-[100%] mblres:text-center">
            Randomized Tests
          </h3>
          <p className="text-white text-[25px] text-balance font-thin font-body tracking-[1px] text-start mblres:text-center">
            Gauge your understanding with tests that challenge your knowledge
            and highlight areas for improvement.
          </p>
        </div>
      </section>
      <section className="flex items-center justify-between ml-[230px] flex-row  mblres:w-[100%] mblres:ml-4 mblres:flex-col-reverse md:ml-[10%] ">
        <div className="flex flex-col  w-[40%] pt-[50px] items-start  mblres:items-center  mblres:w-[100%] md:w-[100%]">
          <h3 className="pb-5 font-medium font-body text-[40px] text-balance text-transparent bg-clip-text bg-gradient-to-r from-[#3DC3DA] to-[#7EEBB6] leading-[43px] text-start mblres: mblres:text-center mblres:text-4xl">
            Personalized Notes
          </h3>
          <p className="text-white text-[25px] text-balance font-thin font-body tracking-[1px] text-start mblres:text-center mblres:text-xl ">
            Keep track of your insights, questions, and key takeaways with our
            integrated notes feature.{" "}
          </p>
        </div>
        <img src="/Notes.png" alt="Notes" className="h-[600px] w-[800px] mblres:w-[100%] md:w-[60%] md:h-[50%]" />
      </section>
      <section>
        <div className="w-fit flex flex-col m-auto ">
          <h2 className="font-body font-medium text-[73.5px] text-center text-transparent bg-clip-text bg-gradient-to-r from-[#33F0FF] to-[#3DC3DA] pt-0 leading-[73px] mblres:text-3xl mblres:mt-3">
            Real-time Insights and Feedback
          </h2>
          <p className="bg-gradient-to-r from-[#020617] from-10% via-[#478567] to-[#7EEBB6] h-[2px] mblres:h-0 md:h-0"></p>
        </div>

        <div className="flex gap-6 mt-16 justify-center mb-20 flex-row  mblres:items-center items-stretch mblres:flex-col ">
          <div className="bg-gradient-to-b from-[#144450] via-[#1f585d] to-[#144450] rounded-xl p-3 w-full max-w-[350px] flex flex-col items-center">
            <img src="/LiveProgress.png" alt="LiveProgress" className="p-3" />
            <h4 className=" pb-5 pt-2 text-[28px] font-body font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3DC3DA] to-[#7EEBB6] md:text-center">
              Live Progress Tracking
            </h4>
            <p className="text-white font-body text-[16px] text-center pb-5 text-pretty w-[80%]">
              Monitor your progress in real-time and see where you stand on your
              learning path.
            </p>
          </div>
          <div className="bg-gradient-to-b from-[#144450] via-[#1f585d] to-[#144450] rounded-xl p-3 w-full max-w-[350px] flex flex-col items-center justify-end">
            <img
              src="/Summaries.png"
              alt="LiveProgress"
              className="px-3 py-12"
            />
            <h4 className=" pb-5 text-[25px] font-body font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3DC3DA] to-[#7EEBB6] md:text-center">
              AI-Generated Summaries
            </h4>
            <p className="text-white font-body text-[16px] text-center pb-5 text-pretty w-[80%]">
              Receive comprehensive summaries that distill key points from each
              chapter, making review sessions more efficient.
            </p>
          </div>
          <div className="bg-gradient-to-b from-[#144450] via-[#1f585d] to-[#144450] rounded-xl p-3 w-full max-w-[350px] flex flex-col items-center justify-end">
            <img src="/Paths.png" alt="LiveProgress" className="px-3 pb-5" />
            <h4 className=" pb-5 text-[25px] font-body  font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3DC3DA] to-[#7EEBB6] md:text-center">
              Personalized Learning Paths
            </h4>
            <p className="text-white font-body text-[16px] text-center pb-5 w-[80%] text-pretty">
              Adapt your study approach based on your performance and feedback,
              ensuring you focus on areas that need improvement.
            </p>
          </div>
        </div>
      </section>
      <section className="">
        <div className="w-fit flex flex-col m-auto ">
          <h2 className="text-center text-[48px] font-body font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#3DC3DA] to-[#7EEBB6] mblres:text-[40px] mblres:mx-10 leading-[48px] mblres:leading-[40px] mblres:text-4xl">
            Ready to transform the way you learn?
          </h2>
          <p className="bg-gradient-to-r from-[#020617] from-10% via-[#478567] to-[#7EEBB6] h-[2px] mblres:h-0 md:h-0"></p>
        </div>
        <div className='bg-[url("/BgConnectEd.png")] bg-no-repeat bg-cover flex justify-between my-10 mx-[120px] pb-16 pl-10 pt-5 rounded-[30px] mblres:justify-center mblres:bg-[url("/ProductLastbg.png")] mblres:pl-2 mblres:mx-5 '>
          <div className="flex flex-col justify-between mblres:hidden">
            <h3 className="text-[40px] font-body font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#3DC3DA] to-[#7EEBB6] mblres:text-3xl ">
              Get started with ConnectEd
            </h3>
            <div className="text-[30px] bg-gradient-to-r from-[#3DC3DA] to-[#7EEBB6] p-2  text-white font-medium rounded-xl w-fit mblres:mt-4">
              Contact Us
            </div>
          </div>
          <picture>
            <source srcSet="/ConnectEd2.png" media="(max-width: 767px)" />
            <source srcSet="/ConnectEd.png" media="(min-width: 768px)" />
            <img
              src="/ConnectEd.png"
              alt="Product"
              className="mt-16 mblres:mt-[300px] mblres:h-[300px] "
            />
          </picture>
        </div>
      </section>
      <div>
        <img src="/Footer.png" alt="Footer" className="w-full" />
      </div>
    </div>
  );
};

export default Product;
