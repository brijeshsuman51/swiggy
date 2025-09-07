import GroceryCard from "../Cards/GroceryCard"
import { GroceryData } from "../utils/GroceryData"


export default function GroceryOption(){
    return(
        <div className="max-w-[80%] container mx-auto mt-20">
            <h1 className="text-2xl font-bold">Shop Groceries on Instamart</h1>
            <div className="container mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-3">
                {
                    GroceryData.map((groceryData)=><GroceryCard key={groceryData?.id} groceryData={groceryData}></GroceryCard>)
                }
            </div>
        </div>
    )
}