import Image from "next/image";
import React from "react";

interface AvatarProps {
  image: string;
}

const Avatar: React.FC<AvatarProps> = ({ image }) => {
  return (
    <Image
      src={image}
      alt="avatar_icon.jpg"
      height={50}
      width={50}
      className="rounded-full border-black border-2"
    />
  );
};

export default Avatar;
