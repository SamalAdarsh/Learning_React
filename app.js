import React from "react";
import ReactDOM from "react-dom/client";

const elm  = <p>Just an element</p>

const JSXheading =( <h1 className="Head">
    {elm}
    Hello Adarsh JSX</h1>);

//Functional Component

const FCheading = () => {
    return <h1 className="Head"> Hello Adarsh from FC-1</h1>
};

const FCheading2 = () => (

<div className="container">
{/* <FCheading/> */}

{/* <FCheading></FCheading> */}

{FCheading()}

{JSXheading}
<h1 className="Head"> Hello Adarsh from FC-2</h1>
</div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FCheading2></FCheading2>);
