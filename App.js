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
const elem = <span>Span Tag</span>

const number = 10000;
const element = (
  <div>
    {elem}
    <h1>React Element</h1>
  </div>
)


const Title = ()=>{
  return (<div>
      <h1> Nuverlan Technologies- My Dream company.</h1>
  </div>)
}

const Header = ()=>{
  return (<div>
    {/* <Title/> */}
    {Title()}
    <h2>Header Component</h2>
    {element}
    {number}
  </div>)
}
const dom = ReactDOM.createRoot(document.getElementById("root"));
//dom.render(heading); // It will replece the div root element with element & this is  the way to render the element

dom.render(<Header/>) // This is way to render the React Component.