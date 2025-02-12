import { Meal } from "@/constants";
import Image from "next/image";
import React from "react";

interface Props {
  className?: string;
  width?: string;
  height?: number;

  image: string;
  name: string;
  category: string;
}

const Cardsm = (props: Props) => {
  const { image, name, category } = props;

  return (
    <div className="border shadow-md rounded-lg p-5 max-h-[200px] hover:border-black">
      <div className="flex">
        <div className="mx-[10px]">
          <Image
            src={image}
            alt={`${name}.jpg`}
            className="w-[75px] h-[75px] rounded-full hover:w-[100px] hover:h-[100px] hover:ease-in duration-300 border border-black"
            width={75}
            height={75}
          />
        </div>

        <div className="truncate ml-[25px] text-lg ">
          {name}
          <br />
          <span className="my-[10px] text-sm">{category}</span>
        </div>
      </div>
    </div>
  );
};

export default Cardsm;
