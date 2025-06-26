// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world from React"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(heading);

// root.render(heading);

{
  /* <div id="parent">
        <div id="class">
            <h1>I'm h1 tag</h1>
            <h2>I'm h2 tag</h2>
        </div> */
}

const parent = React.createElement(
    "div", 
    { id: "parent" },
    [React.createElement("div", { id: "child" },[
        React.createElement("h1", { },  "Hello from h1"),
        React.createElement("h2", { },  "Hello from h2"),]
    
    ),

    React.createElement("div", { id: "child" },[
        React.createElement("h1", { },  "Hello from h1"),
        React.createElement("h2", { },  "Hello from h2"),]
    
    )]);

const root1 = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent);

root1.render(parent);
