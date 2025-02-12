import React from "react";

interface CardProps {
  title: string;
  content: string;
}

const HomeCard: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="hover:bg-gray-700 hover:text-white hover:-translate-y-3">
      <div></div>
      <div className="text-[18px] font-semibold">{title}</div>
      <div>{content}</div>
    </div>
  );
};

export default HomeCard;
