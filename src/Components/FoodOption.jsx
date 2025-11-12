import { useState, useEffect } from "react";
import { imageGridCards } from "../utils/FoodData";
import FoodCard from "../Cards/FoodCard";
import FoodShimmer from "../utils/FoodShimmer";

export default function FoodOption(){
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <FoodShimmer />;
    }

    return(
        <div className="max-w-7xl mx-auto mt-12 md:mt-20 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">What's on your mind?</h2>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
                {
                    imageGridCards.map((foodData) => (
                        <FoodCard key={foodData.id} foodData={foodData} />
                    ))
                }
            </div>
        </div>
    );
}