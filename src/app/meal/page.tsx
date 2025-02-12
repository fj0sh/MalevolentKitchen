"use client";

import { Button, Cardsm, Loading } from "@/components";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Meal } from "@/constants";
import useMeal from "@/hooks/useMeal";
import Image from "next/image";
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
        <Button name="Search" onClick={() => router.push("/test")} />
      </div>

      <div className="grid grid-cols-4 gap-2 mx-[25px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 smartphone:grid-cols-1">
        {loading ? (
          <Loading count={25} />
        ) : (
          mealData?.meals?.map((meal: Meal) => (
            <Link key={meal.idMeal} href={`meal/${meal.strMeal}`}>
              <Cardsm
                category={meal.strCategory}
                image={meal.strMealThumb}
                name={meal.strMeal}
              />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Meals;
