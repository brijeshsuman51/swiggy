import { imageGridCards } from "../utils/FoodData";
import FoodCard from "../Cards/FoodCard";

export default function FoodOption(){
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