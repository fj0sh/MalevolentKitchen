import React, { useEffect, useState } from 'react'
import { getMeal } from '@/services/getMeal';
import Meal from '@/constants';

const useMeal = () => {
const [input, setInput] = useState<any>("a");
  const [mealData, setMealData] = useState<any>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDataName = async () => {
      try {
        setLoading(true);
        const res = await getMeal(input)
        setMealData(res);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchDataName();
  }, [input]);

  console.log(mealData);
  
    return{setInput, loading, mealData};
}

export default useMeal
