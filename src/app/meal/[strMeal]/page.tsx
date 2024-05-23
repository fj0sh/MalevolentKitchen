"use client";

import { MealCard } from "@/components";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Meal } from "@/constants";
import Link from "next/link";
import useSelected from "@/hooks/useSelected";

const Mealid = ({ params }: { params: { strMeal: string } }) => {
  const { setSelectedMeal, selectedData } = useSelected();

  useEffect(() => {
    setSelectedMeal(params.strMeal);
  }, [params.strMeal, setSelectedMeal]);

  const meals = selectedData?.meals;

  return (
    <>
      <div>
        <Link href="/meal" className="border rounded-xl p-2 mx-3 mt-3">
          Back
        </Link>
      </div>

      <div className="mx-[100px]">
        {meals?.map((meal: Meal) => {
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
