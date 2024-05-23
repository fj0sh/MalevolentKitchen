import React from "react";
import { Meal } from "@/constants";

interface Props {
  children?: React.ReactNode;
  title: string;
  category: string;
  instruction: string;
  ingredients: string;
  measurement: string;
  image: string;
  id?: string;
}

const Mealcard = (props: Props) => {
  const {
    children,
    title,
    category,
    instruction,
    ingredients,
    measurement,
    image,
    id,
  } = props;

  return (
    <div className="border border-black-500 rounded-lg shadow-md p-3">
      <div className="flex flex-col items-center">
        <img
          src={image}
          className="w-[80px] h-[80px] border rounded-lg shadow-md"
          alt={title}
        />
        <p>{title}</p>
        <p>{category}</p>
      </div>
      <div className="flex gap-6 border border-black-500 rounded-md p-3">
        <div className=" w-[25%]">{children}</div>
        <div className="w-[75%] text-justify leading-relaxed indent-10 tracking-normal">
          {instruction}
        </div>
      </div>

      <div className=""></div>
    </div>
  );
};

export default Mealcard;
