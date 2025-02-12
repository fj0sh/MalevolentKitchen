import { Meal, MealResponse } from "@/constants";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const request = axios.create({ baseURL: process.env.NEXT_PUBLIC_URL });

const useRandomMeal = () => {
  const [randomMeal, setRandomMeal] = useState<MealResponse | null>(null);
  const hasFetched = useRef(false);

  const fetchRandom = async () => {
    try {
      const res = await request.get("random.php");
      setRandomMeal(res.data);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    if (hasFetched.current) return;

    hasFetched.current = true;
    fetchRandom();
    console.log(hasFetched);
  }, []);

  return { randomMeal };
};

export default useRandomMeal;
