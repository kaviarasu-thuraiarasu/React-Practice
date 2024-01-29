import { useEffect, useState } from "react"

const useRestaurantInfo = (resId)=>{
    const [resInfo,setresInfo] = useState(null)
    
    useEffect(()=>{
        console.log("customhook");
        fetchData()
    },[])

    const fetchData = async ()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
              resId +
              "&catalog_qa=undefined&submitAction=ENTER"
          );
          const val = await data.json();
          setresInfo(val)
    }
    return resInfo

}

export default useRestaurantInfo