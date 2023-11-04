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

import ReactDOM from "react-dom/client";
import Header from './components/Header'
import Body from './components/Body'

import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestuarantMenu.";

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



const About = () => {
  return (
    <div>
      <h1> Nuverlan Technologies- My Dream company.</h1>
    </div>
  );
};






const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/**This is how we have to write the comments */}
      {/* <Body/> */}
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([{
  path:"/",
  element:<AppLayout/>,
  errorElement:<Error/>,
  children:[
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/about",
      element:<About/>
    },{
      path:"/contact",
      element:<Contact/>
    },{
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>
    }
  ]
}])
const dom = ReactDOM.createRoot(document.getElementById("root"));
//dom.render(heading); // It will replece the div root element with element & this is  the way to render the element

//dom.render(<AppLayout />); // This is way to render the React Component.
dom.render(<RouterProvider router={appRouter} />); // This is way to render the React Component.