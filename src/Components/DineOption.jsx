import DineCard from "../Cards/DineCard";
import { DineData } from "../utils/DineData";


export default function DineOption(){
    return(
        DineData.map((dineData)=><DineCard key={DineData?.info?.id} dineData={dineData}></DineCard>)
    )
}