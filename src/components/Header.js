import {LOGO_URL} from '../../utils/constant'
import {useEffect} from "react"
import {Link} from "react-router-dom"
const Header = () => {
  useEffect(()=>{},[])
    return (
      <div className="flex justify-between bg-pink-50 shadow-sm" >
        {/* <Title/>
      {Title()}
      <h2>Header Component</h2>
      {element}
      {number} */}
        <div className="logo-container">
          <img
            className="w-24"
            src={LOGO_URL}
          />
        </div>
  
        <div className="nav-items">
          <ul className="flex p-8 m-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact US</Link></li>
           
          </ul>
        </div>
      </div>
    );
  };

  export default Header