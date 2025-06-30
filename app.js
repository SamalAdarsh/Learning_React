import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo1.jpg";
import userIcon from "./user-icon2.jpg";

const Header = () => {

     return (
           <div className="head-container">

            <div className="logo-container">
                <img  className="logo" src="https://images.seeklogo.com/logo-png/55/1/food-paradise-logo-png_seeklogo-551076.png" alt="Logo"></img>
                 </div>
            <div className="nav-items"> 
              <ul>
                   <li>Home</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                     <li>Cart</li>
              </ul>
            
            </div>
           </div>
    );


}

const AppLayout = () =>{

    return (
           <div className="main-container">
           <Header/>
           </div>
    );

};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);