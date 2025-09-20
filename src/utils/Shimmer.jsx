export default function Shimmer() {
    const shimmerCards = Array.from({ length: 8 });

    return (
        <div className="w-[80%] mx-auto mt-20 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {shimmerCards.map((_, index) => (
                    <div key={index} className="w-full mb-2">
                        <div className="h-48 w-full rounded-xl bg-gray-300"></div>
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