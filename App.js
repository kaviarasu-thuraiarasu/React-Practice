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

const element = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Nuverlan Technologies"),
    React.createElement("h1", {}, "Nuverlan Academy"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Nuverlan.ai"),
    React.createElement("h1", {}, "Nuverlan Artificial Intelligence"),
  ])]
);
console.log(element);
const dom = ReactDOM.createRoot(document.getElementById("root"));
dom.render(element); // It will replece the div root element with element
