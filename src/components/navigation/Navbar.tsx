import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-100 flex justify-between items-center text-[18px] font-semibold p-2 bg-slate-500 h-[4rem]">
      <div>
        <p>Malevolent Kitchen</p>
      </div>
      <div className="flex gap-5">
        <Link href={"/"} className="">
          Home
        </Link>
        <Link href={"/meal"} className="">
          Browse
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
