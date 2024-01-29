//import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../../utils/useRestaurantInfo";
const RestaurantMenu = () => {
  const { resId } = useParams();
  //const [menu, setData] = useState(null);
  // useEffect(() => {
  //   fetchMenu();
  // }, []);
console.log("Hello");
const menu = useRestaurantInfo(resId)

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
  //       resId +
  //       "&catalog_qa=undefined&submitAction=ENTER"
  //   );
  //   const val = await data.json();
  //   setData(val);
  // };
  if (menu == null) return <Shimmer />;
  if (!menu?.data?.hasOwnProperty("cards"))
    return <div>No Record Vailable!!</div>;
  const { name, cuisines } = menu?.data?.cards[0]?.card?.card?.info;
  const { itemCards } =
    menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{cuisines.join(" ")}</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.name}>
            {item?.card?.info?.name} : {item?.card?.info?.price} Rs.
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
