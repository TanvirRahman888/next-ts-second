import { IFood } from "@/app/Types/type";
import Image from "next/image";

interface FoodCardProps {
  food: IFood;
}

const FoodCard = ({ food }: FoodCardProps) => {
  return (
    <div className="rounded-lg border bg-white shadow-md overflow-hidden">
      {/* Image */}
      <Image
        src={food.image_link}
        alt={food.dish_name}
        className="object-cover"
        width={500}
        height={300}
      />

      {/* Content */}
      <div className="p-5 flex flex-col">
        {/* Title */}
        <h2 className="text-xl font-bold mb-2">{food.dish_name}</h2>

        {/* Category & Cuisine */}
        <div className="flex gap-2 mb-3">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            {food.category}
          </span>

          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
            ⭐ {food.rating}
          </span>
        </div>

        {/* Price */}
        <p className="text-lg font-semibold text-gray-800">
          Price: ৳{food.price}
        </p>

        {/* Cuisine */}
        <p className="text-sm text-gray-600 mt-2">{food.cuisine}</p>

        {/* Ingredients */}
        <div className="mt-4 flex flex-col flex-1">
          <h3 className="font-semibold">Main Ingredients:</h3>

          <ul className="list-disc ml-5 text-sm flex-1 text-gray-600">
            {food.main_ingredients.slice(0, 4).map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        {/* Nutrition */}
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <h3 className="font-semibold mb-2">Nutrition</h3>

          <p className="text-sm">
            Calories: {food.approximate_nutrition_per_serving.calories}
          </p>

          <p className="text-sm">
            Protein: {food.approximate_nutrition_per_serving.protein}
          </p>
        </div>

        {/* Button */}
        <button className="mt-5 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
          View Details
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
