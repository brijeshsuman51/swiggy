export default function GroceryCardShimmer() {
    return (
        <div className="flex-none">
            <div className="w-40 h-48 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded animate-shimmer bg-[length:200%_100%]"></div>
            <div className="w-32 h-5 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded mt-2 mx-auto animate-shimmer bg-[length:200%_100%]"></div>
        </div>
    );
}

