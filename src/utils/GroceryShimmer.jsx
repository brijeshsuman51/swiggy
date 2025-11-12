export default function GroceryShimmer() {
    const shimmerCards = Array.from({ length: 6 });

    return (
        <div className="max-w-7xl mx-auto mt-12 md:mt-20 px-4 sm:px-6 lg:px-8">
            <div className="h-8 w-64 bg-gray-300 rounded mb-5"></div>
            <div className="flex overflow-x-auto mt-5 gap-4 pb-4 scrollbar-hide">
                {shimmerCards.map((_, index) => (
                    <div key={index} className="flex-none w-full mb-2">
                        <div className="w-40 h-48 rounded-xl bg-gray-300"></div>
                        <div className="w-[95%] mx-auto mt-3">
                            <div className="w-full h-6 bg-gray-300 rounded"></div>
                            <div className="w-full h-6 bg-gray-300 mt-2 rounded"></div>
                            <div className="w-full h-6 bg-gray-300 mt-2 rounded"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

