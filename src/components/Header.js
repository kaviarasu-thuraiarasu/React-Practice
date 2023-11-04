import {LOGO_URL} from '../../utils/constant'
import {useEffect} from "react"
import {Link} from "react-router-dom"
const Header = () => {
  useEffect(()=>{},[])
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
            src={LOGO_URL}
          />
        </div>
  
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact US</Link></li>
           
          </ul>
        </div>
      </div>
    );
  };

  export default Header