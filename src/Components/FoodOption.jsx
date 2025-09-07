import { imageGridCards } from "../utils/FoodData";
import FoodCard from "../Cards/FoodCard";

export default function FoodOption(){
    return(
        <>
        <div className="max-w-[80%] container mx-auto flex flex-wrap mt-20 gap-3">
            {
                imageGridCards.map((foodData)=><FoodCard key={foodData.id} foodData={foodData}/>)
            }
        </div>
        </>
        
    )
}