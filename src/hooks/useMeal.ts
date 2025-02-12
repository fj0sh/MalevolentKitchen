import React, { useEffect, useState } from "react";
import { MealResponse } from "@/constants";
import axios from "axios";

const request = axios.create({ baseURL: process.env.NEXT_PUBLIC_URL });

const useMeal = () => {
  const [input, setInput] = useState<any>("a");
  const [submit, setSubmit] = useState<boolean>();
  const [mealData, setMealData] = useState<MealResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchMeal = async () => {
    try {
      setLoading(true);
      const res = await request.get(`search.php?s=${input}`);
      setMealData(res.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMeal();
  }, [input]);

  console.log(mealData);

  return { setInput, loading, mealData, setSubmit, request };
};

export default useMeal;
