'use client'

import { useState } from "react";

const Counter = () => {

    const [count,setCount]=useState(0)

    const handelIncrease=()=>{
        setCount(count+1)
    }

    const handelDecrease=()=>{
        setCount(count-1)
    }


    return (
        <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Counter</h2>
            <div className="flex justify-center gap-5">
                <button onClick={handelIncrease} className="btn btn-primary">Increase ++</button>
                <button onClick={handelDecrease} className="btn btn-secondary">Decrement --</button>
            </div>
                <h3 className="text-3xl text-center">Value {count}</h3>
        </div>
    );
};

export default Counter;