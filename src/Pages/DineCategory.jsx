import { useState, useEffect } from "react";
import { useParams } from "react-router";
import CheckoutHeader from "../Components/CheckoutHeader";
import DineShimmer from "../utils/DineShimmer";
import DineCard from "../Cards/DineCard";
import { DineData } from "../utils/DineData";
import Footer from "../Components/Footer";

export default function DineCategory() {
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
                <DineShimmer />
                <Footer />
            </>
        );
    }

    return (
        <>
            <CheckoutHeader />
            {/* <div className="max-w-7xl mx-auto mt-12 md:mt-20 mb-12 md:mb-20 px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold">Discover best Restaurants for Dineout</h2>
                <div className="flex overflow-x-auto mt-5 gap-4 pb-4 scrollbar-hide">
                    {DineData.map((dineData) => (
                        <DineCard key={dineData?.info?.id} dineData={dineData} />
                    ))}
                </div>
            </div> */}
            <DineShimmer />
            <Footer />
        </>
    );
}

