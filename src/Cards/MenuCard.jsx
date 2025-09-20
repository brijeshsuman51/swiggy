import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { addItems, IncrementItems, DecrementItems } from '../CartSlicer';

export default function MenuCard({ restData }) {
    const dispatch = useDispatch();

    const { id, name, defaultPrice, price, imageId, ratings, description } = restData || {};
    const itemPrice = (defaultPrice || price || 0) / 100;
    const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`;

    const cartItem = useSelector(
        (state) => state?.Cartslice?.items.find(item => item.id === id),
        shallowEqual
    );
    const count = cartItem ? cartItem.quantity : 0;

    // --- Event Handlers ---
    const handleAddItems = () => dispatch(addItems(restData));
    const handleIncrementItems = () => dispatch(IncrementItems(restData));
    const handleDecrementItems = () => dispatch(DecrementItems(restData));

    return (
        // Main container
        <div className="w-full flex flex-col sm:flex-row sm:justify-between gap-4 py-4 border-b">
            
            {/* --- Text Content --- */}
            <div className="w-full sm:flex-grow order-2 sm:order-1">
                <p className="text-lg sm:text-xl text-gray-800 font-semibold mb-1">{name}</p>
                <p className="text-base sm:text-lg mb-2">₹{itemPrice.toFixed(2)}</p>
                {ratings?.aggregatedRating?.rating && (
                    <div className="text-sm text-gray-600 mb-2">
                        <span>⭐ {ratings.aggregatedRating.rating}</span>
                        <span> ({ratings.aggregatedRating.ratingCountV2})</span>
                    </div>
                )}
                <p className="text-gray-500 text-sm">{description}</p>
            </div>

            {/* --- Image and Action Button --- */}
            <div className="relative order-1 sm:order-2 w-full sm:w-40 md:w-48 flex-shrink-0">
                {imageId && (
                    <img 
                        className="w-full aspect-video object-cover rounded-xl" 
                        src={imageUrl} 
                        alt={name}
                    />
                )}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-28 text-center">
                    {count === 0 ? (
                        <button 
                            className="rounded-lg text-lg font-bold text-green-600 px-6 py-2 shadow-lg border bg-white hover:bg-gray-50 transition-all" 
                            onClick={handleAddItems}
                        >
                            ADD
                        </button>
                    ) : (
                        <div className="rounded-lg text-lg font-bold flex justify-around items-center text-green-600 px-4 py-2 shadow-lg border bg-white">
                            <button onClick={handleDecrementItems} className="hover:scale-125 transition-transform">-</button>
                            <span>{count}</span>
                            <button onClick={handleIncrementItems} className="hover:scale-125 transition-transform">+</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}