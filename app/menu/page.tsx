import React from 'react';
import { IFood } from '../Types/type';
import FoodCard from '../components/Menu/FoodCard';

const MenuPage = async () => {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods")
    const data =await res.json();
    const foodRecipes:IFood[]=data.data;
    return (
        <div>
            <h2>Menu Page {data.length}</h2>
            <h2>Menu Page {foodRecipes.length}</h2>
            <div className="grid grid-cols-2 gap-5 justify-between">
                {
                    foodRecipes.map((food)=><FoodCard key={food.id} food={food}/>)
                }
            </div>
        </div>
    );
};

export default MenuPage;