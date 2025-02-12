interface Meal {
    strMeasure: string;
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strInstructions: string;
    strMealThumb: string;
    strIngredients: string;
    strYoutube:string
    strTags:string
    strArea:string
  };

  interface MealResponse {
    meals: Meal[];
  }

  export type {Meal, MealResponse};