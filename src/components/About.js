import User from "./User"
import UserClass from "./UserClass"
import React from "react" // or import {Component} from "react"

class About extends React.Component { // or class About extends Component {
    constructor(props){
super(props)
console.log("Parent constructor")
    }

    componentDidMount(){
        // This will get call after the component get rendered fully
        // Almost same like useEffect() in functional component
        console.log("Parent component did mount")
        // Why this method is needed? Its used for make API calls 
        // Why we doing the API call here? 
        //if we have multiple userClass , then life cycle work little differntly
    }
    render(){
        console.log("Parent Render")
        return (
                  <div>
                    <h1> Nuverlan Technologies- My Dream company.</h1>
                    <User name={"FunctionBased"}/>
                    <h1> Nuverlan Technologies- My Dream company.(Class Based)</h1>
                    <UserClass  name={"ClassBased 1"}/>

                    <UserClass  name={"ClassBased 2"}/>
                  </div>
                );
    }
}
// const About = () => {
//     return (
//       <div>
//         <h1> Nuverlan Technologies- My Dream company.</h1>
//         <User name={"FunctionBased"}/>
//         <h1> Nuverlan Technologies- My Dream company.(Class Based)</h1>
//         <UserClass  name={"ClassBased"}/>
//       </div>
//     );
//   };

  export default About