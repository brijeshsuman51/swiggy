export default function DineCardShimmer() {
    return (
        <div className="w-full sm:max-w-sm flex-none">
            <div className="relative">
                <div className="w-full h-40 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded animate-shimmer bg-[length:200%_100%]"></div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-400 to-transparent rounded-b"></div>
                <div className="absolute bottom-2 left-2 w-32 h-5 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-shimmer bg-[length:200%_100%]"></div>
                <div className="absolute bottom-2 right-2 w-12 h-5 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-shimmer bg-[length:200%_100%]"></div>
            </div>
        </div>
    );
}

