import { Link } from "react-router";

export default function DineCard({dineData}) {
    // Use the restaurant ID as categoryId for routing
    const categoryId = dineData?.info?.id || 'restaurant';

    return (
        <Link 
            to={`/dine/${categoryId}`}
            className="w-full sm:max-w-sm flex-none cursor-pointer"
        >
            <div className="relative transition-transform duration-300 hover:scale-105">
                <img 
                    className="w-full h-40 object-cover rounded" 
                    src={'https://media-assets.swiggy.com/swiggy/image/upload/'+dineData?.info?.mediaFiles[0]?.url} 
                    alt="Restaurant"
                />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent rounded-b"></div>
                <p className="absolute bottom-2 left-2 text-base sm:text-xl text-white z-10">
                    {dineData?.info?.name}
                </p>
                <p className="absolute bottom-2 right-2 text-base sm:text-xl text-white z-10">
                    {dineData?.info?.rating?.value}
                </p>
            </div>
        </Link>
    )
}