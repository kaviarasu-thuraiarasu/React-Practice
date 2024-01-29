//const RestCard = ({resName,cuisine})=>{ // Destructuing on Fly
const RestCard = (props)=>{

    const {name,cloudinaryImageId,avgRating,sla:{deliveryTime},cuisines} = props.resData
    
    return (
  <div className="res-card">
    <img className="res-logo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}></img>
    <h3>{name}</h3>
    <h4>{cuisines.join(", ")}</h4>
    <h4>Ratings : {avgRating}</h4>
    <h4>Delivery Time : {deliveryTime} Minutes</h4>
  </div>
    )
  }

  export default RestCard
  