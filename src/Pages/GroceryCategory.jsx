import { useState, useEffect } from "react";
import { useParams } from "react-router";
import CheckoutHeader from "../Components/CheckoutHeader";
import GroceryShimmer from "../utils/GroceryShimmer";
import GroceryCard from "../Cards/GroceryCard";
import { GroceryData } from "../utils/GroceryData";
import Footer from "../Components/Footer";

export default function GroceryCategory() {
    const { categoryId } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [categoryId]);

    if (isLoading) {
        return (
            <>
                <CheckoutHeader />
                <GroceryShimmer />
                <Footer />
            </>
        );
    }

    return (
        <>
            <CheckoutHeader />
            {/* <div className="max-w-7xl mx-auto mt-12 md:mt-20 px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold">
                    Shop Groceries on Instamart
                </h2>
                <div className="flex overflow-x-auto mt-5 gap-4 pb-4 scrollbar-hide">
                    {GroceryData.map((groceryData) => (
                        <GroceryCard key={groceryData?.id} groceryData={groceryData} />
                    ))}
                </div>
            </div> */}
            <GroceryShimmer />
            <Footer />
        </>
    );
}

