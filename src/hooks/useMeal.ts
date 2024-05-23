import React, { useEffect, useState } from 'react'
import { getMeal } from '@/services/getMeal';
import { MealResponse} from '@/constants';

const useMeal = () => {
const [input, setInput] = useState<any>("a");
  const [mealData, setMealData] = useState<MealResponse | null>(null);
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
        }, 500);
      }
    };
    fetchDataName();
  }, [input]);

  useEffect(() => {
    console.log(mealData);
  }, [mealData]);
  
  
    return{setInput, loading, mealData};
}

export default useMeal
