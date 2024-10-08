import React from "react";
import Link from "next/link";
import "../globals.css";

interface ArticleProps {
  img: string;
}

const Article: React.FC<ArticleProps> = ({ img }) => {
  return (
    <div className="p-2 shadow-four-sides rounded-[15%] w-fit z-42">
      <Link href="/SayntBlog">
        <img src={img} alt="Article" />
      </Link>
      <div className="mx-20 mt-5">
        <p className="text-white text-[24px] font-body font-medium">Title</p>
        <p className="text-white text-[24px] font-body font-medium">Sub Title</p>
        <p className="text-white text-[24px] font-body font-medium">Description Here</p>
        <p className="underline decoration-white decoration-1 text-white text-[24px] font-body font-medium text-right">
          Read More
        </p>
      </div>
    </div>
  );
};

export default Article;
