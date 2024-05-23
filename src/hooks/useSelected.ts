import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Meal, MealResponse } from '@/constants';
  
  const useSelected = () => {
    const [selectedMeal, setSelectedMeal] = useState("")
    const [selectedData, setSelectedData] = useState<MealResponse | null>(null);

  useEffect(() => {
    const fetchDataName = async () => {
      if (selectedMeal) {
        try {
          const res = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${selectedMeal}`
          );
          setSelectedData(res.data.meals ? res.data : null);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchDataName();
  }, [selectedMeal]);

  useEffect(() => {
    console.log(selectedData);
}, [selectedMeal, selectedData]);

    return{setSelectedMeal, selectedData}
  }
  
  export default useSelected
  