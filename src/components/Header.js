import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
//   let loginbtn = "Login";

  const [loginReactbtn, setloginReactbtn] = useState("Login");

  return (
    <div className="head-container">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Cart</li>

          <button
            className="login-btn"
            onClick={() => {
              loginReactbtn === "Login"
                ? setloginReactbtn("Logout")
                : setloginReactbtn("Login");
              console.log(loginReactbtn);
            }}
          >
            {loginReactbtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
