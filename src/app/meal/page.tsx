"use client";

import { Button, Cardsm, Loading } from "@/components";
import Link from "next/link";
import React, { useEffect } from "react";
import { Meal } from "@/constants";
import useMeal from "@/hooks/useMeal";
import Image from "next/image";
import { title } from "process";
import { useRouter } from "next/navigation";

const Meals = () => {
  const { setInput, loading, mealData, setSubmit } = useMeal();
  const router = useRouter();

  return (
    <>
      <div className="flex justify-end mx-10 gap-10 my-5">
        <input
          className="bg-slate-400 rounded-lg px-2 border border-black h-[50px] max-w-[500px] w-[500px] min-w-[250px] text-md"
          type="text"
          placeholder="Search......"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button name="Search" onClick={() => router.push("/test")}></Button>
      </div>

      <div className="grid grid-cols-4 gap-2 mx-[25px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 smartphone:grid-cols-1">
        {loading ? (
          <Loading count={25} />
        ) : (
          mealData?.meals?.map((meal: Meal) => (
            <Link key={meal.idMeal} href={`meal/${meal.strMeal}`}>
              <Cardsm>
                <div className="flex">
                  <div className="mx-[10px]">
                    <Image
                      src={meal.strMealThumb}
                      alt={`${meal.strMeal}.jpg`}
                      className="w-[75px] h-[75px] rounded-full hover:w-[100px] hover:h-[100px] hover:ease-in duration-300 border border-black"
                      width={75}
                      height={75}
                    />
                  </div>

                  <div className="truncate ml-[25px] text-lg ">
                    {meal.strMeal}
                    <br />
                    <span className="my-[10px] text-sm">
                      {meal.strCategory}
                    </span>
                  </div>
                </div>
              </Cardsm>
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Meals;
