import { Link } from "react-router";

export default function FoodCard({foodData}){
    // Use the food item ID or text as categoryId for routing
    const categoryId = foodData?.id || foodData?.action?.text?.toLowerCase().replace(/\s+/g, '-');

    return(
        <Link 
            to={`/food/${categoryId}`}
            className="block group cursor-pointer"
        >
            <img
                className="w-full aspect-square object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
                src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/'+foodData?.imageId}
                alt={foodData?.accessibility?.altText || "Food item"}
            />
        </Link>
    )
}