import React, { useEffect, useState } from "react";
import { getMeal } from "@/services/getMeal";
import { MealResponse } from "@/constants";

const useMeal = () => {
  const [input, setInput] = useState<any>("a");
  const [submit, setSubmit] = useState<boolean>();
  const [mealData, setMealData] = useState<MealResponse | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDataName = async () => {
      setLoading(true);
      try {
        const res = await getMeal(input);
        setMealData(res);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };
    console.log("fetch");

    fetchDataName();
  }, [submit]);

  useEffect(() => {
    console.log(mealData);
  }, [mealData, submit]);

  const toggleSubmit = () => {
    setSubmit((prev) => !prev);
  };

  return { setInput, loading, mealData, setSubmit, toggleSubmit };
};

export default useMeal;
