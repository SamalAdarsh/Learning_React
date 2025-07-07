import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";

const Header = () => {
console.log("Header Rendered");

  const [loginReactbtn, setloginReactbtn] = useState("Login");

useEffect(()=>{console.log("useEffect is called")},[loginReactbtn]);
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
