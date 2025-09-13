import { useState } from "react";
import MenuCard from "../Cards/MenuCard";

export default function RecommendedInfo({menuItems, foodselected}){
    const [Open, setOpen] = useState(true)

    if("categories" in menuItems){
        return(
            <div className="w-full">
                <p className="text-2xl font-bold" >{menuItems.title}</p>
                <div>
                    {
                        menuItems?.categories?.map((items)=> 
                            <RecommendedInfo 
                                key={items.title} 
                                menuItems={items} 
                                foodselected={foodselected}
                            />
                        )
                    }
                </div>
            </div>
        )
    }

    if(!Open){
        return(
            <div className="w-full">
                <div className="flex justify-between w-full">
                <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
                <button className="text-5xl font-bold mr-20" onClick={()=>setOpen(!Open)}>{Open?"^":"⌄"}</button>
                </div>
                <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
            </div>
        )
    }

    // Filter items based on food selection
    let filteredItems = menuItems?.itemCards || [];
    
    if(foodselected === 'veg'){
        filteredItems = filteredItems.filter(food => food?.card?.info?.isVeg === 1);
    }
    else if(foodselected === 'nonveg'){
        filteredItems = filteredItems.filter(food => food?.card?.info?.isVeg !== 1);
    }

    return(
        <div className="w-full">
            <div className="flex justify-between w-full">
                <p className="text-3xl font-bold mb-4">{menuItems?.title}</p>
                <button className="text-5xl font-bold mr-20" onClick={()=>setOpen(!Open)}>{Open?"^":"⌄"}</button>
            </div>
            <div>
                {
                    filteredItems.map((items) => 
                        <MenuCard 
                            key={items?.card?.info?.id} 
                            restData={items?.card?.info}
                        />
                    )
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
    )
}