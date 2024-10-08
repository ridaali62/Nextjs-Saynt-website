import React from "react";
import "../globals.css";

interface FlipcardProps {
  title: string;
  backTitle: string;
  description: string;
}

const FlipCard: React.FC<FlipcardProps> = ({ title, backTitle, description }) => {
  return (
    <div className="flip-card h-[400px] w-[300px] ">
      <div className="flip-card-inner h-full">
        <div className="flip-card-front bg-gradient-to-b from-[#6CC8BE] shadow-[#3DC3DA] shadow-lg border to-[#3DC3DA]  text-white flex flex-col items-center justify-center p-6 rounded-lg h-full ">
          <p className="text-white font-body font-bold text-9xl">{title}</p>
        </div>
        <div className="flip-card-back bg-[#3DC3DA]  font-body text-white px-6 rounded-lg flex flex-col items-center justify-end h-full ">
          <h2 className="text-white font-bold text-3xl text-balance text-center">
            {backTitle}
          </h2>
          <p className="text-white/[0.6] font-medium text-2xl text-balance text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
