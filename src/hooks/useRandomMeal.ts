import { Meal } from "@/constants";
import axios from "axios";
import React, { useEffect, useState } from "react";

const useRandomMeal = () => {
  const [randomMeal, setRandomMeal] = useState<Meal[]>();
  const fetchRandom = async () => {
    try {
      const res = await axios.get(
        "http://www.themealdb.com/api/json/v1/1/random.php"
      );
      setRandomMeal(res.data);
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    fetchRandom();
  }, []);

  return { randomMeal };
};

export default useRandomMeal;
