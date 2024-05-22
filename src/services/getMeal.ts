import axios from 'axios'
import Meal from '@/constants';

const getMeal = async(input:Meal) => {
    try {
        const res  = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
        return res.data
    } catch (error) {
        console.log();
        
    }
    return null;
}

export {getMeal}