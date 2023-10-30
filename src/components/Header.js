import {LOGO_URL} from '../../utils/constant'
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
            src={LOGO_URL}
          />
        </div>
  
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>ContactUs</li>
            <li>Cart</li>
            <button className="login-btn">Login</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header