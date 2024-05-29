"use client";
import FeaturedCard from "@/components/Cards/FeaturedCard";
import { Meal } from "@/constants";
import useRandomMeal from "@/hooks/useRandomMeal";
import React from "react";
import Mealid from "../meal/[strMeal]/page";
import Link from "next/link";
import { Button } from "@/components";

const Test = () => {
  const { randomMeal } = useRandomMeal();
  console.log(randomMeal);

  return (
    <div>
      {randomMeal?.meals.map((meal: Meal) => (
        <FeaturedCard
          name={meal.strMeal}
          image={meal.strMealThumb}
          area={meal.strArea}
          category={meal.strCategory}
          key={meal.idMeal}
        >
          <Link
            href={`meal/${meal.strMeal}`}
            className="text-black no-underline"
          >
            <Button name="View"></Button>
          </Link>
        </FeaturedCard>
      ))}
    </div>
  );
};

export default Test;
