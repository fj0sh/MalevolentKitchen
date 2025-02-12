"use client";
import { Meal } from "@/constants";
import useRandomMeal from "@/hooks/useRandomMeal";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import HomeCard from "../Cards/HomeCard";
import Titles from "../Texts/Titles";

const Home = () => {
  const [toggleExpanded, setToggleExpanded] = useState(false);
  const { randomMeal } = useRandomMeal();
  let featuredDish = randomMeal?.meals[0];

  return (
    <div className="flex flex-col">
      <div className="flex h-[30vh] bg-slate-400 w-full relative">
        <div className="w-full h-full bg-slate-0 absolute top-0 left-0 -z-50"></div>

        {/* <Link
          href="#randMeal"
          className="absolute top-0 right-0 z-50 m-6 text-white text-[20px] font-bold border-none bg-slate-500 shadow-lg px-3 py-1 rounded-full hover:bg-slate-700 hover:-translate-x-2 transition-all duration-1000"
        >
          Featured
        </Link> */}
        {/* <p className=" justify-self-center self-center ">asdasdas</p> */}
        <Image
          src="/let_him_cook.jpg"
          alt="let_him_cook.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div
        id="randMeal"
        className="flex flex-col items-center h-full gap-3 p-3 mx-[25px]"
      >
        <Titles text="Hollup Let Him Cook.." />
        <div className="flex gap-6 w-full lg:flex-row md:flex-row sm:flex-col">
          {featuredDish && (
            <div className="border lg:w-[35%] sm:w-full h-[20rem] flex flex-col rounded-lg shadow-lg p-3">
              <div className="relative w-full h-full">
                <Image
                  src={featuredDish?.strMealThumb}
                  alt={featuredDish?.strMeal}
                  // width={200}
                  // height={200}
                  layout="fill"
                  // objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <p className="w-full text-center py-2">{featuredDish.strMeal}</p>
            </div>
          )}
          <div
            className={`border lg:w-[80%] sm:w-full ${
              toggleExpanded ? "h-fit" : "h-[20rem]"
            } rounded-lg shadow-lg flex flex-col p-3 `}
          >
            <div className="flex overflow-hidden truncate gap-8 h-full">
              <div className="w-[25%] h-full">
                <ol className=" text-wrap border-r h-fit p-3 border-black">
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
                </ol>
              </div>

              <div className="w-[75%] h-full relative break-words">
                <p className="text-wrap leading-[23px] tracking-wider">
                  {featuredDish?.strInstructions}
                </p>
              </div>
            </div>

            <div className="w-full h-fit flex justify-center py-3">
              <button
                className={`font-semibold text-zinc-600 hover:text-zinc-800 `}
                onClick={() => setToggleExpanded(!toggleExpanded)}
              >
                {!toggleExpanded ? "See More" : "See Less"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Titles
        text="Why One Should Cook?"
        className="w-full text-center my-[25px]"
      />
      <div className="h-[80vh] grid sm:grid-cols-2 lg:grid-cols-4 lg:py-[10rem] lg:gap-6 gap-3 p-6 *:p-3 *:border *:rounded-lg *:shadow-md *:transition-all *:duration-1000">
        <HomeCard
          title="Nurturing Relationship"
          content="Cooking for others is a way to show love and care, strengthening bonds with family and friends through shared meals and experiences."
        />
        <HomeCard
          title="Mindfulness and Relaxation"
          content="The process of cooking can be meditative and stress-relieving, allowing you to focus on the present moment and enjoy the creative process."
        />
        <HomeCard
          title="Cultural Connection"
          content="Preparing traditional recipes helps preserve cultural heritage and allows you to explore and appreciate different cuisines and traditions"
        />
        <HomeCard
          title="Sustainability"
          content="Cooking at home enables you to make environmentally conscious choices, such as using local and seasonal ingredients, reducing food waste, and minimizing packaging."
        />
      </div>
    </div>
  );
};

export default Home;
