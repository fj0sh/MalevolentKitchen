import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  image: string;
  name?: string;
  category?: string;
  area?: string;
  id?: string;
  children: React.ReactNode;
  key?: string;
}

const FeaturedCard = (props: Props) => {
  const { image, name, category, area, id, children } = props;

  return (
    <>
      <div className="bg-white flex flex-col items-center">
        <div key={id}>
          <h1 className="text-center">Featured Dish</h1>
          <Image
            src={image}
            height={200}
            width={200}
            alt="image"
            priority
          ></Image>
        </div>
        <div className="text-center">
          <p className="font-bold">{name}</p>
          <p>
            <span>Category: </span> {category}
          </p>
          <p>
            <span>Area:</span>
            {area}
          </p>
          {children}
        </div>
      </div>
    </>
  );
};

export default FeaturedCard;
