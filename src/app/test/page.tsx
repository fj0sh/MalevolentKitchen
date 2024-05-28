"use client";
import useRandomMeal from "@/hooks/useRandomMeal";
import React from "react";

const Test = () => {
  const { randomMeal } = useRandomMeal();
  console.log(randomMeal);

  return <div></div>;
};

export default Test;
