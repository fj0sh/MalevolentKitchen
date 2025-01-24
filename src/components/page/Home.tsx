"use client";
import { Meal } from "@/constants";
import useRandomMeal from "@/hooks/useRandomMeal";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Home = () => {
  const [toggleExpanded, setToggleExpanded] = useState(false);
  const { randomMeal } = useRandomMeal();
  let featuredDish = randomMeal?.meals[0];

  return (
    <div className="flex flex-col">
      <div className="flex h-screen bg-slate-400 w-full relative">
        <Link
          href="#randMeal"
          className="absolute top-0 right-0 z-50 m-6 text-white text-[20px] font-bold border-none bg-slate-500 shadow-lg px-3 py-1 rounded-full hover:bg-slate-700 hover:-translate-x-2 transition-all duration-1000"
        >
          Featured
        </Link>
        <div className="w-full h-full bg-slate-0 absolute top-0 left-0 -z-50"></div>
        {/* <p className=" justify-self-center self-center ">asdasdas</p> */}
        {/* <Image
          src="/let_him_cook.jpg"
          alt="let_him_cook.jpg"
          layout="fill"
          objectFit="cover"
        /> */}
      </div>
      <div className="h-[80vh] grid sm:grid-cols-2 lg:grid-cols-4 lg:py-[10rem] lg:gap-6 gap-3 p-6 *:p-3 *:border *:rounded-lg *:shadow-md *:transition-all *:duration-1000">
        <div className="hover:bg-gray-700 hover:-translate-y-3"></div>
        <div className="hover:bg-gray-700 hover:-translate-y-3"></div>
        <div className="hover:bg-gray-700 hover:-translate-y-3"></div>
        <div className="hover:bg-gray-700 hover:-translate-y-3"></div>
      </div>
      <div
        id="randMeal"
        className="flex flex-col items-center h-full gap-3 p-3"
      >
        <p>Featured Meal</p>
        <div className="flex gap-6 w-full">
          {featuredDish && (
            <div className="border w-[20%] h-[15rem] flex flex-col rounded-lg shadow-lg p-2">
              <div className="relative w-full h-full">
                <Image
                  src={featuredDish?.strMealThumb}
                  alt={featuredDish?.strMeal}
                  // width={200}
                  // height={200}
                  layout="fill"
                  // objectFit="cover"
                  // className="w-full h-full"
                />
              </div>
              <p className="w-full text-center py-2">{featuredDish.strMeal}</p>
            </div>
          )}
          <div
            className={`border w-[80%] ${
              toggleExpanded ? "h-fit" : "h-[15rem]"
            } rounded-lg shadow-lg flex flex-col p-3`}
          >
            <div className="flex">
              <div className="w-[25%] h-full">
                <ul>
                  {featuredDish &&
                    Array.from(
                      { length: toggleExpanded ? 20 : 5 },
                      (_, index) => index + 1
                    ).map((index) => (
                      <li key={index} className="mb-[10px]">
                        {featuredDish[`strIngredient${index}` as keyof Meal]}{" "}
                        {featuredDish[`strMeasure${index}` as keyof Meal]}
                      </li>
                    ))}
                </ul>
              </div>

              <div className="w-[75%] h-full relative break-words overflow-y-auto">
                <p className="text-wrap">{featuredDish?.strInstructions}</p>
              </div>
            </div>

            <div className="w-full h-full flex justify-center">
              <button
                className={`font-semibold text-zinc-600 hover:text-zinc-800 `}
                onClick={() => setToggleExpanded(!toggleExpanded)}
              >
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
