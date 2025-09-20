import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import RecommendedInfo from "../Pages/RecommendedInfo";
// import Shimmer from "../utils/Shimmer"; 

export default function RestaurantMenu() {
    const { id } = useParams();
    const [selected, setSelected] = useState(null);
    const [restData, setRestData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.960059122809971&lng=77.57337538383284&restaurantId=${id}`;
            
            try {
                const response = await fetch(proxyServer + swiggyAPI);
                if (!response.ok) throw new Error(`API error: ${response.status}`);
                
                const data = await response.json();
                const menuCards = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
                
                const filteredData = menuCards.filter(
                    (c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
                           c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
                );

                setRestData(filteredData);
            } catch (error) {
                console.error("Failed to fetch menu:", error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [id]);

    if (isLoading) {
        return <div className="text-center mt-20">Loading menu...</div>;
    }

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 py-8">
            {/* --- Controls Header --- */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
                {/* Search Link */}
                <Link
                    to={`/city/kota/${id}/search`}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 text-left py-3 px-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-base sm:text-lg text-gray-700 order-2 sm:order-1"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    <span>Search for Dishes</span>
                </Link>

                {/* Veg/Non-Veg Filters */}
                <div className="flex items-center gap-3 order-1 sm:order-2">
                    <button 
                        className={`font-medium text-base sm:text-lg py-2 px-5 border rounded-full transition-colors ${selected === 'veg' ? "bg-green-600 text-white border-green-600" : "bg-white text-gray-700"}`} 
                        onClick={() => setSelected(selected === 'veg' ? null : "veg")}
                    >
                        Veg
                    </button>
                    <button 
                        className={`font-medium text-base sm:text-lg py-2 px-5 border rounded-full transition-colors ${selected === 'nonveg' ? "bg-red-500 text-white border-red-500" : "bg-white text-gray-700"}`} 
                        onClick={() => setSelected(selected === 'nonveg' ? null : "nonveg")}
                    >
                        Non-Veg
                    </button>
                </div>
            </div>

            {/* --- Menu List --- */}
            <div className="flex flex-col">
                {restData.map((menuItems) => (
                    <RecommendedInfo 
                        key={menuItems?.card?.card?.title} 
                        menuItems={menuItems?.card?.card} 
                        foodselected={selected} 
                    />
                ))}
            </div>
        </div>
    );
}