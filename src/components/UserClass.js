
import React from 'react';
class UserClass extends React.Component {

    constructor(props){
        super(props)
        this.state={
            userInfo :{
                name:"Dummy",
                location:"Default"
            }
        }
        // this.state={
        //     count:0,
        //     address:"South Thamarai kulam"
        // }
        // console.log(this.props.name,"Child constructor")
    }
    async componentDidMount(){
        //console.log(this.props.name,"Child component did mount")
        const data = await fetch("https://api.github.com/users/kaviarasu-thuraiarasu")
        const val = await data.json()
        console.log(val)
        this.setState({
        //     userInfo:{
        //     name:val.login,
        //     location:val.url
        // }
        userInfo:val
    })
    }

    componentDidUpdate(){
        console.log("Component Did Update")
    }
    render(){
       // console.log("Child Render")
        const {login:name,url:location} = this.state.userInfo
        return (<div>
            <h3>Name -  {name}</h3>
            <h3>location-  {location}</h3>
            <h2>Contact -  </h2>
            {/* <button onClick={()=>{this.setState({count:this.state.count+1,address:"kanyakumari"})}}>Increament</button> */}
            </div>)
    }
}

export default UserClass    