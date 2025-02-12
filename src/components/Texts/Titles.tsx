import React from "react";

interface titleProps {
  text: string;
  className?: string;
}
const Titles: React.FC<titleProps> = ({ text, className }) => {
  return <p className={`font-semibold text-[20px] ${className}`}>{text}</p>;
};

export default Titles;
