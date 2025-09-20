import { useState } from "react";
import MenuCard from "../Cards/MenuCard";

export default function RecommendedInfo({ menuItems, foodselected }) {
    const [isOpen, setIsOpen] = useState(true);

    if ("categories" in menuItems) {
        return (
            <div className="w-full pl-2 sm:pl-4 my-4 border-l-2 border-gray-200">
                <p className="text-xl sm:text-2xl font-bold mb-2">{menuItems.title}</p>
                <div className="flex flex-col gap-4">
                    {menuItems.categories.map((category) => (
                        <RecommendedInfo 
                            key={category.title} 
                            menuItems={category} 
                            foodselected={foodselected}
                        />
                    ))}
                </div>
            </div>
        );
    }

    let filteredItems = menuItems?.itemCards || [];
    if (foodselected === 'veg') {
        filteredItems = filteredItems.filter(food => food?.card?.info?.isVeg === 1);
    } else if (foodselected === 'nonveg') {
        filteredItems = filteredItems.filter(food => food?.card?.info?.isVeg !== 1);
    }

    if (filteredItems.length === 0) {
        return null;
    }

    return (
        <div className="w-full">
            <button
                className="flex justify-between items-center w-full text-left py-4"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls={`menu-section-${menuItems.title}`}
            >
                <p className="text-xl sm:text-2xl font-bold">
                    {menuItems?.title} ({filteredItems.length})
                </p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? '' : '-rotate-180'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div id={`menu-section-${menuItems.title}`}>
                    {filteredItems.map((item) => (
                        <MenuCard 
                            key={item?.card?.info?.id} 
                            restData={item?.card?.info}
                        />
                    ))}
                </div>
            )}
            
            <div className="h-3 bg-gray-100 mt-2 mb-2 rounded-full"></div>
        </div>
    );
}