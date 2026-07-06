import React from "react";
import Link from "next/link";
import "../globals.css";

interface ArticleProps {
  img: string;
  title: string;
  subtitle: string;
  description: string;
}

const Article: React.FC<ArticleProps> = ({ img, title, subtitle, description }) => {
  return (
    <div className="p-2 shadow-four-sides rounded-[15%] w-fit z-42">
      <Link href="/SayntBlog">
        <img src={img} alt={title} />
      </Link>
      <div className="mx-20 mt-5 mblres:mx-6">
        <p className="text-white text-[24px] font-body font-medium">{title}</p>
        <p className="text-white text-[24px] font-body font-medium">{subtitle}</p>
        <p className="text-white text-[24px] font-body font-medium">{description}</p>
        <Link
          href="/SayntBlog"
          className="underline decoration-white decoration-1 text-white text-[24px] font-body font-medium text-right block"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Article;
