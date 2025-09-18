

export default function FoodCard({foodData}){
    return(
        <a href={foodData?.action?.link} className="block group">
            <img
                className="w-full aspect-square object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
                src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/'+foodData?.imageId}
                alt={foodData?.accessibility?.altText || "Food item"}
            />
        </a>
    )
}