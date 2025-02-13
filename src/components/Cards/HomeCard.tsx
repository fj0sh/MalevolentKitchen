import React from "react";

interface CardProps {
  title: string;
  content: string;
}

const HomeCard: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="flex hover:bg-gray-700 hover:text-white hover:-translate-y-3 gap-4 flex-col h-full justify-center items-center sm:items-start">
      <div></div>
      <div className="text-[18px] font-semibold text-center sm:text-left">
        {title}
      </div>
      <div className="text-center sm:text-left">{content}</div>
    </div>
  );
};

export default HomeCard;
