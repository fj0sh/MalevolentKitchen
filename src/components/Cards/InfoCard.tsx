import React from "react";

const InfoCard = () => {
  return (
    <div className="">
      <div className="relative border-none rounded-lg shadow-lg bg-violet-200 w-full h-[30rem]">
        <div className="absolute shadow-md border-none rounded-full p-28 bg-gray-200 -top-28 left-1/2 transform -translate-x-1/2"></div>
        <div className="flex flex-col items-center justify-center h-full gap-3 p-4 border border-black">
          <p className="font-bold"></p>
          <p className="text-center overflow-wrap break-word"></p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
