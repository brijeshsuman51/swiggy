import { useState , useEffect} from "react"
import { useParams } from "react-router"



export default function SearchFood(){
    const {id} = useParams()

    const [RestData,setRestData] = useState([])
    const [food,setFood] = useState("")
    useEffect(()=>{
            async function fetchData() {
                const proxyServer = "https://cors-anywhere.herokuapp.com/"
                const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.960059122809971&lng=77.57337538383284&restaurantId=${id}`
                const response = await fetch(proxyServer+swiggyAPI)
                const data = await response.json()
    
                const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
                const filterData = tempData.filter((items)=>'title' in items?.card?.card)
                setRestData(filterData)
    
            }
            fetchData();
    
        },[])

        return(
            <div className="w-[80%] mx-auto mt-20">
                <input className="w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl border" placeholder="Search Here" onChange={(e)=>setFood(e.target.value)}></input>
            </div>
        )
    
}