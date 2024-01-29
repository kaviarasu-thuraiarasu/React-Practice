import {useState} from "react"
const About = ({name})=>{

    const [count,setCount] = useState(0)
    return (<div>
        <h3>Name- {name}</h3>
        <h3>Address</h3>
        <h2>Count - {count} </h2>
        </div>)

}

export default About