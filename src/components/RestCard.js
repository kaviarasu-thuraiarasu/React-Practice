//const RestCard = ({resName,cuisine})=>{ // Destructuing on Fly
const RestCard = (props)=>{

    const {name,image,rating,distance,cuisine} = props.resData
    console.log(props)
    return (
  <div className="res-card">
    <img className="res-logo" src={image}></img>
    <h3>{name}</h3>
    <h4>{cuisine}</h4>
    <h4>Ratings : {rating}</h4>
    <h4>Delivery Time : {distance}</h4>
  </div>
    )
  }

  export default RestCard
  