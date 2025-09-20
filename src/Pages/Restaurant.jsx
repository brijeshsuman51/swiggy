import { useEffect, useState } from "react";
import RestaurantCard from "../Cards/RestaurantCard";
import Shimmer from "../utils/Shimmer";

export default function Restaurant() {
    const [restData, setRestData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const proxyServer = 'https://cors-anywhere.herokuapp.com/';
            const swiggyAPI = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.960059122809971&lng=77.57337538383284&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
            
            try {
                const response = await fetch(proxyServer + swiggyAPI);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                const restaurants = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
                setRestData(restaurants);
            } catch (error) {
                console.error("Failed to fetch restaurant data:", error);
            }
        }

        fetchData();
    }, []);

    if (restData.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="w-full max-w-screen-xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {restData.map((restinfo) => (
                    <RestaurantCard key={restinfo?.info?.id} restinfo={restinfo} />
                ))}
            </div>
        </div>
    );
}