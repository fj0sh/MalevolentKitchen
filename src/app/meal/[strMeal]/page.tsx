"use client";

import { MealCard } from "@/components";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Meal } from "@/constants";
import Link from "next/link";
import useMeal from "@/hooks/useMeal";

const Mealid = ({ params }: { params: { strMeal: string } }) => {
  const [data, setData] = useState<any>({});
  const dets = data?.meals;

  // useEffect(() => {
  //   const fetchDataName = async () => {
  //     try {
  //       const res = await fetch(
  //         `https://www.themealdb.com/api/json/v1/1/search.php?s=${params.strMeal}`
  //       );
  //       const jsondata = await res.json();

  //       setData(jsondata);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchDataName();
  // }, []);

  const { setInput, mealData } = useMeal();

  useEffect(() => {
    console.log(mealData);
  }, []);

  return (
    <>
      <Link href="/meal" className="border rounded-xl p-2 mx-3 mt-3">
        Back
      </Link>

      <div className="mx-[100px]">
        {dets?.map((meal: Meal) => {
          return (
            <div key={meal.idMeal} className="mt-[25px]">
              <MealCard
                title={meal.strMeal}
                image={meal.strMealThumb}
                ingredients={meal.strIngredients}
                category={meal.strCategory}
                measurement={meal.strMeasure}
                instruction={meal.strInstructions}
              >
                <div>
                  <ul>
                    {Array.from({ length: 20 }, (_, index) => index + 1).map(
                      (index) => (
                        <li key={index} className="mb-[10px]">
                          {meal[`strIngredient${index}` as keyof Meal]}{" "}
                          {meal[`strMeasure${index}` as keyof Meal]}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </MealCard>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Mealid;
