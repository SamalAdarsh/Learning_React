import React from "react";
import ReactDOM from "react-dom/client";


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

//Inline CSS

const styleCard = {

    backgroundColor : "grey"
}

const RestaurentCard = () =>(
<div className="res-card" style={styleCard}>
 <img 
 className="res-img"
 src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jvtx9kfdlmovtdyy3rhv"></img>
 <h3>Abhinandan Hotel</h3>
 <h4>Chinese, Tandoori, Asian</h4>
 <h4>4.5 stars</h4>
 <h4>45 mins</h4>
</div>

);




const Body = () =>(

<div className="body">
<div className="search">Search</div>
<div className="res-conatiner">

<RestaurentCard/>
<RestaurentCard/>
<RestaurentCard/>
<RestaurentCard/>
<RestaurentCard/>
<RestaurentCard/>
<RestaurentCard/>
<RestaurentCard/>
<RestaurentCard/>
<RestaurentCard/>
<RestaurentCard/>
<RestaurentCard/>

</div>



 </div>

);

const AppLayout = () =>{

    return (
           <div className="main-container">
           <Header/>
           <Body/>
           </div>
    );

};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);