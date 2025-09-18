import DineCard from "../Cards/DineCard";
import { DineData } from "../utils/DineData";


export default function DineOption(){
    return(
        <div className="max-w-7xl mx-auto mt-12 md:mt-20 mb-12 md:mb-20 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold">Discover best Restaurants for Dineout</h2>
            <div className="flex overflow-x-auto mt-5 gap-4 pb-4 scrollbar-hide">
               { DineData.map((dineData)=>(
                    <DineCard key={dineData?.info?.id} dineData={dineData} />
                ))}
            </div>
        </div>
    )
}