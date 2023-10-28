/**
 * <div id="Parent">
 *      <div id="child1">
 *          <h1>Nuverlan Technologies</h1>
 *          <h2>Nuverlan Technologies</h2>
 *      </div>
 * <div id="child2">
 *          <h1>Nuverlan Technologies</h1>
 *          <h2>Nuverlan Technologies</h2>
 *      </div>
 * </div>
 */

// const element = React.createElement(
//   "h1",
//   { id: "title", name: "tet" },
//   "Hello World from React!!!"
// );
// { id: "title", name: "tet"} ==> This is the place to add the attribute to the element!!
import React from "react";
import { findDOMNode } from "react-dom";
import ReactDOM from "react-dom/client";
// const element = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "Nuverlan Technologies cdfdfdfd"),
//     React.createElement("h1", {}, "Nuverlan Academy"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "Nuverlan.ai"),
//     React.createElement("h1", {}, "Nuverlan Artificial Intelligence"),
//   ]),

//   React.createElement("div", { id: "child3" }, [
//     React.createElement("h1", {}, "Nuverlan.ai"),
//     React.createElement("h1", {}, "Nuverlan Artificial Intelligence"),
//   ]),
// ]);
// console.log(element);
// const element = React.createElement("h1",{id:"CreateElement"},"Nuverlan Technologies- My Dream Company")
// const heading = <h1>Nuverlan Technologies- My Dream Company</h1>
// console.log(heading)
const elem = <span>Span Tag</span>;

const number = 10000;
const element = (
  <div>
    {elem}
    <h1>React Element</h1>
  </div>
);

const resObj = {
  data:[{
    name:"Big Bowl",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/TopPicks/CknKadBowl",
    rating:"3.8",
    distance:"2.5KM",
    cuisine:"North Indian, Chinese"
  },
  {
    name:"Big Bowl",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",
    rating:"3.8",
    distance:"2.5KM",
    cuisine:"North Indian, Chinese"
  },
  {
    name:"Big Bowl",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/blvjkdq0ridib6p6gxrq",
    rating:"3.8",
    distance:"2.5KM",
    cuisine:"North Indian, Chinese"
  },
  {
    name:"Big Bowl",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/blvjkdq0ridib6p6gxrq",
    rating:"3.8",
    distance:"2.5KM",
    cuisine:"North Indian, Chinese"
  },
  {
    name:"Big Bowl",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/blvjkdq0ridib6p6gxrq",
    rating:"3.8",
    distance:"2.5KM",
    cuisine:"North Indian, Chinese"
  },
  {
    name:"Big Bowl",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/blvjkdq0ridib6p6gxrq",
    rating:"3.8",
    distance:"2.5KM",
    cuisine:"North Indian, Chinese"
  },
  {
    name:"Big Bowl",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/blvjkdq0ridib6p6gxrq",
    rating:"3.8",
    distance:"2.5KM",
    cuisine:"North Indian, Chinese"
  },
  {
    name:"Big Bowl",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/blvjkdq0ridib6p6gxrq",
    rating:"3.8",
    distance:"2.5KM",
    cuisine:"North Indian, Chinese"
  },
  {
    name:"Big Bowl",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/blvjkdq0ridib6p6gxrq",
    rating:"3.8",
    distance:"2.5KM",
    cuisine:"North Indian, Chinese"
  },
  {
    name:"Big Bowl",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/blvjkdq0ridib6p6gxrq",
    rating:"3.8",
    distance:"2.5KM",
    cuisine:"North Indian, Chinese"
  },
  {
    name:"Big Bowl",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/blvjkdq0ridib6p6gxrq",
    rating:"3.8",
    distance:"2.5KM",
    cuisine:"North Indian, Chinese"
  },
  {
    name:"Big Bowl",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/blvjkdq0ridib6p6gxrq",
    rating:"3.8",
    distance:"2.5KM",
    cuisine:"North Indian, Chinese"
  },
  {
    name:"Big Bowl",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/blvjkdq0ridib6p6gxrq",
    rating:"3.8",
    distance:"2.5KM",
    cuisine:"North Indian, Chinese"
  }]
}

const Title = () => {
  return (
    <div>
      <h1> Nuverlan Technologies- My Dream company.</h1>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      {/* <Title/>
    {Title()}
    <h2>Header Component</h2>
    {element}
    {number} */}
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?size=626&ext=jpg"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>ContactUs</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

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

const Body = () => {
  return (
    <div className="body">
      <div className="searchBar">Search ...</div>
      <div className="res-container">
          {/* <RestCard resName="KFC" cuisine="Biryani, Non-Veg" star="4" time="40 Minutes"/>
          <RestCard resName="A2B" cuisine="Biryani, Veg"  star="4.8" time="15 Minutes"/>
           */}
           {
            resObj.data.map((res,index)=> <RestCard resData={res} key={index}/>)
           }

      </div>  
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};

const dom = ReactDOM.createRoot(document.getElementById("root"));
//dom.render(heading); // It will replece the div root element with element & this is  the way to render the element

dom.render(<AppLayout />); // This is way to render the React Component.
