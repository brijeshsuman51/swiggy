import { useEffect } from "react"
import { useState } from "react"
import RestaurantCard from "../Cards/RestaurantCard"
import Shimmer from "../utils/Shimmer"



export default function Restaurant(){

    const [RestData,setRestData] = useState([])
    useEffect(()=>{
        async function fetchData() {
            const proxyServer = 'https://cors-anywhere.herokuapp.com/'
            const swiggyAPI = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.960059122809971&lng=77.57337538383284&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
            const response = await fetch(proxyServer+swiggyAPI)
            const data = await response.json()
            setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        fetchData()
    },[])


    if(RestData.length==0){
        return <Shimmer></Shimmer>
    }
    return(
        <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
            {
                RestData.map((restinfo)=><RestaurantCard key={restinfo?.info?.id} restinfo={restinfo}></RestaurantCard>)
            }
        </div>
    )
}