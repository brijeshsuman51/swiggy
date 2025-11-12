export default function FoodShimmer() {
    const shimmerCards = Array.from({ length: 8 });

    return (
        <div className="max-w-7xl mx-auto mt-12 md:mt-20 px-4 sm:px-6 lg:px-8">
            <div className="h-8 w-64 bg-gray-300 rounded mb-5"></div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
                {shimmerCards.map((_, index) => (
                    <div key={index} className="w-full mb-2">
                        <div className="w-full aspect-square rounded-xl bg-gray-300"></div>
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

