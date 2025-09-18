import GroceryCard from "../Cards/GroceryCard";
import { GroceryData } from "../utils/GroceryData";

export default function GroceryOption() {
  return (
    <div className="max-w-7xl mx-auto mt-12 md:mt-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold">
        Shop Groceries on Instamart
      </h2>
      
      <div className="flex overflow-x-auto mt-5 gap-4 pb-4 scrollbar-hide">
        {GroceryData.map((groceryData) => (
          <GroceryCard key={groceryData?.id} groceryData={groceryData} />
        ))}
      </div>
    </div>
  );
}