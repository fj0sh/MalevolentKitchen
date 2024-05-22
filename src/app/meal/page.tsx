"use client";

import { Button, Cardsm, Loading } from "@/components";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import Meal from "@/constants";
import useMeal from "@/hooks/useMeal";

const Meals = () => {
  // const [input, setinput] = useState("");
  // const [data, setData] = useState<any>({});
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchDataName = async () => {
  //     try {
  //       setLoading(true);
  //       const res = await fetch(
  //         `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
  //       );
  //       const jsondata = await res.json();
  //       setData(jsondata);
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setTimeout(() => {
  //         setLoading(false);
  //       }, 1000);
  //     }
  //   };

  //   fetchDataName();
  // }, [input]);

  const { setInput, loading, mealData } = useMeal();

  return (
    <>
      <div className="flex justify-end mx-10 gap-10 my-5">
        <input
          className="bg-slate-400 rounded-lg px-2"
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button name="Random" className="p-1 rounded-md border border-2-" />
      </div>

      <div className="grid grid-cols-4 gap-2 mx-[25px]">
        {loading ? (
          <Loading count={25} />
        ) : (
          mealData.meals?.map((meal: Meal) => (
            <Link key={meal.idMeal} href={`meal/${meal.strMeal}`}>
              <Cardsm>
                <div className="flex">
                  <div className="mx-[10px]">
                    <img
                      src={meal.strMealThumb}
                      alt="meal.jpg"
                      className="w-[50px] h-[50px] rounded-full hover:w-[75px] hover:h-[75px] hover:ease-in duration-300  "
                    />
                  </div>
                  <div className="truncate">
                    {meal.strMeal}
                    <br />
                    {meal.strCategory}
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
