import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { Link } from "react-router";
import RecommendedInfo from "../Pages/RecommendedInfo";
// import MenuCard from "../Cards/MenuCard";



export default function RestaurantMenu(){

    let {id} = useParams();
    const [selected,setSelected] = useState(null)
    const [RestData,setRestData] = useState([])

    useEffect(()=>{
        async function fetchData() {
            const proxyServer = "https://cors-anywhere.herokuapp.com/"
            const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.960059122809971&lng=77.57337538383284&restaurantId=${id}`
            const response = await fetch(proxyServer+swiggyAPI)
            const data = await response.json()

            const tempData = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            // console.log(tempData)
            const filterData = tempData.filter((items)=>'title' in items?.card?.card)
            setRestData(filterData)
        }

        fetchData();

    },[])
    // console.log(RestData)
    return(
        <div>
            <div className="w-[80%] mx-auto mt-20 mb-20">
                <Link to={`/city/kota/${id}/search`}>
                <p className="w-full text-center py-4 rounded-2xl bg-gray-200 text-2xl">Seach for Dishes</p>
                </Link>
            </div>
            <div className="w-[80%] mx-auto mt-20 mb-20">
                <button className={`text-2xl py-2 px-8 mr-4 border rounded-2xl ${selected==='veg'?"bg-green-600":"bg-gray-300"}`} onClick={()=>setSelected(selected==='veg'?null:"veg")}>Veg</button>
                <button className={`text-2xl py-2 px-4 border rounded-2xl ${selected==='nonveg'?"bg-red-500":"bg-gray-300"}`} onClick={()=>setSelected(selected==='nonveg'?null:"nonveg")}>Non Veg</button>
            </div>
            <div className="w-[80%] mx-auto mt-20">
                {
                    RestData.map((menuItems)=><RecommendedInfo key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodselected={selected}></RecommendedInfo>)
                }
            </div>
        </div>
    )
}