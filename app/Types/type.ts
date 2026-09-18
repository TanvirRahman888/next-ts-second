export interface iPostType{
    userId:number;
    id:number;
    title:string;
    body:string;
}

export interface IFood {
  id: string;
  dish_name: string;
  category: string;
  alternative_names: string[];
  main_ingredients: string[];

  approximate_nutrition_per_serving: {
    calories: string;
    protein: string;
    carbohydrates: string;
    fat: string;
    fiber: string;
  };

  rating: number;
  price: number;

  possible_price_in_dhaka: {
    home_cooked: string;
    street_food_or_small_restaurant: string;
    cafe_or_healthy_eatery: string;
  };

  cuisine: string;
  origin_and_popularity: string;

  cooking_steps: string[];

  image_link: string;
}