import { Link } from "react-router";

export default function RestaurantCard({ restinfo }) {
    const { id, name, cloudinaryImageId, avgRating, sla, cuisines } = restinfo?.info || {};
    const imageUrl = "https://media-assets.swiggy.com/swiggy/image/upload/" + cloudinaryImageId;

    return (
        <Link to={'/city/kota/' + id}>
            <div className="w-full transform transition duration-200 hover:scale-95 group">
                {/* Image Container */}
                <img
                    className="w-full aspect-video object-cover rounded-xl"
                    src={imageUrl}
                    alt={name}
                />

                {/* Card Content */}
                <div className="w-[95%] mx-auto mt-3">
                    <div className="font-bold text-lg sm:text-xl truncate">{name}</div>
                    
                    {/* Ratings and Delivery Time */}
                    <div className="flex items-center gap-2 mt-1">
                        <svg
                            className="w-5 h-5 fill-green-600"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M9.049 2.927c.3-.645 1.605-.645 1.905 0l1.525 3.78 4.173.605c.738.107 1.035 1.012.5 1.534l-3.016 2.942.712 4.15c.127.74-.651 1.299-1.305.95l-3.726-1.962-3.726 1.962c-.654.35-1.432-.21-1.305-.95l.712-4.15-3.016-2.942c-.535-.522-.238-1.427.5-1.534l4.173-.605L9.049 2.927z" />
                        </svg>
                        <span className="text-base sm:text-lg">{avgRating}</span>
                        <span className="text-base sm:text-lg font-semibold">{sla?.slaString}</span>
                    </div>

                    {/* Cuisines */}
                    <div className="text-gray-600 text-base sm:text-lg mt-1 truncate">
                        {cuisines?.join(", ")}
                    </div>
                </div>
            </div>
        </Link>
    );
}