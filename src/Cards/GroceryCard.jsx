import { Link } from "react-router";

export default function GroceryCard({groceryData}){
    // Use the grocery item ID or text as categoryId for routing
    const categoryId = groceryData?.id || groceryData?.action?.text?.toLowerCase().replace(/\s+/g, '-');

    return(
        <Link 
            to={`/grocery/${categoryId}`}
            className="flex-none cursor-pointer"
        >
            <img 
                className="w-40 h-48 object-cover rounded transition-transform duration-300 hover:scale-105" 
                src={`https://media-assets.swiggy.com/swiggy/image/upload/`+groceryData?.imageId}
                alt={groceryData?.action?.text}
            />
            <h1 className="text-center font-bold mt-2">{groceryData?.action?.text}</h1>
        </Link>
    )
}