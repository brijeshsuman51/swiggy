import DineCard from "../Cards/DineCard";
import { DineData } from "../utils/DineData";


export default function DineOption(){
    return(
        <div className="w-[80%] mx-auto mt-20 mb-20">
            <p className="text-3xl font-bold">Discover best Restaurants for Dineout</p>
            <div className="flex flex-nowrap overflow-x-auto mt-5 gap-4">
       { DineData.map((dineData)=><DineCard key={DineData?.info?.id} dineData={dineData}></DineCard>)}
        </div>
        </div>
    )
}