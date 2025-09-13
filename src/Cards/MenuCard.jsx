import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { addItems, IncrementItems, DecrementItems } from '../CartSlicer'

export default function MenuCard({ restData }) {
    const dispatch = useDispatch()
    
    // Corrected the typo: Cartslice instead of CartSlice
    const cartItems = useSelector(state => {
        const items = state?.Cartslice?.items || [];
        return items;
    }, shallowEqual)
    

    const element = cartItems.find(item => item.id === restData.id)
    const count = element ? element.quantity : 0;

    function handleAddItems() {
        dispatch(addItems(restData))
    }
    
    function handleIncrementItems() {
        dispatch(IncrementItems(restData))
    }
    
    function handleDecrementItems() {
        dispatch(DecrementItems(restData))
    }

    return (
        <div className="w-full flex justify-between mb-2 pb-2">
            <div className="w-[70%]">
                <p className="text-2xl text-gray-700 font-semibold mb-1">{restData?.name}</p>
                <p className="text-xl">{"₹" + ("defaultPrice" in restData ? restData?.defaultPrice / 100 : restData?.price / 100)}</p>
                <span className="text-gray-700">{restData?.ratings?.aggregatedRating?.rating}</span>
                <span>{"(" + restData?.ratings?.aggregatedRating?.ratingCountV2 + ")"}</span>
                <p>{restData?.description}</p>
            </div>

            <div className="relative w-[20%] h-42">
                <img 
                    className="w-60 h-36 object-cover rounded-3xl" 
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/" + restData?.imageId} 
                    alt={restData?.name}
                />
                {count === 0 ? (
                    <button 
                        className="absolute bottom-1 left-20 rounded-xl text-2xl text-green-600 px-6 py-2 shadow-md border border-white bg-white" 
                        onClick={handleAddItems}
                    >
                        ADD
                    </button>
                ) : (
                    <div className="absolute bottom-1 left-20 rounded-xl text-2xl flex gap-3 text-green-600 px-6 py-2 shadow-md border border-white bg-white">
                        <button onClick={handleDecrementItems}>-</button>
                        <span>{count}</span>
                        <button onClick={handleIncrementItems}>+</button>
                    </div>
                )}
            </div>
        </div>
    )
}