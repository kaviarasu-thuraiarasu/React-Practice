import RestCard from './RestCard';
import resObj from '../../utils/mock_data'
import {useState, useEffect} from 'react'
import Shimmer from './Shimmer'
import {Link} from "react-router-dom"
const Body = () => {

    // Normal Javascript Variable.With this normal variable we can't achieve the UI and data layer sync

    // To make UI and Data layer sync, we have to make super power variable(State variable)
    // let list_res = [{
    //     name:"KFC",
    //     image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/TopPicks/CknKadBowl",
    //     rating:"4.2",
    //     distance:"2.5KM",
    //     cuisine:"North Indian, Chinese"
    //   },
    //   {
    //     name:"Big Bowl",
    //     image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",
    //     rating:"3.8",
    //     distance:"2.5KM",
    //     cuisine:"North Indian, Chinese"
    //   },
    //   {
    //     name:"Biryani Zone",
    //     image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/TopPicks/CknKadBowl",
    //     rating:"4.5",
    //     distance:"2.5KM",
    //     cuisine:"North Indian, Chinese"
    //   }]



     // const [list_data,setListData] = useState(resObj.data) //Array destructuring

     const [list_data,setListData] = useState([])
     const [initialState,setinitialState] = useState([])
      // or
// const arr = useState(resObj.data)
// const [list_data,setListData]=arr
//or
// const arr = useState(resObj.data)
// const list_data=arr[0]
// const setListData=arr[1]

useEffect(()=>{fetchData()},[])

const [search,setSearch] = useState("")
const fetchData = async ()=>{
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  const json = await data.json()
  setinitialState(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
    ?.restaurants)
  setListData(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
?.restaurants)
console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
  ?.restaurants)
}
// console.log(list_data)
// if(list_data.length ===0){
//   return <Shimmer/>
// }
    return initialState.length ===0 ? <Shimmer/> : (
      <div className="body">
        <div className="searchBar">
          <input type="text" className="form-control" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
          <button className="search-btn" onClick={()=>{
            
            const filtered = initialState.filter((data)=> data.info.name.toLowerCase().includes(search.toLowerCase()))
            
            setListData(filtered)
          }}>Search</button>
            <button className="search-btn" onClick={()=>{
                setListData(list_data.filter((data)=> data.info.avgRating>4.2))
               
            }}>Top Rated Restuarant</button>
        </div>
        <div className="res-container">
            {/* <RestCard resName="KFC" cuisine="Biryani, Non-Veg" star="4" time="40 Minutes"/>
            <RestCard resName="A2B" cuisine="Biryani, Veg"  star="4.8" time="15 Minutes"/>
             */}
             {
              
              //resObj.data.map((res,index)=> <RestCard resData={res} key={index}/>)
              list_data.map((res,index)=> <Link to={"/restaurants/"+res.info.id}  key={index}><RestCard resData={res.info}/></Link>)
             }
  
        </div>  
      </div>
    );
  };

  export default Body // Default Export