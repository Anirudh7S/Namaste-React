// const heading = React.createElement(
//     "h1",
//     {id: "heading", xyz: "abc"},
//     "Hello, Anirudh from React!"
//     );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); 


const parent = React.createElement(
    "div",
    {id: "parent"}, 
    React.createElement(
        "div",
        {id: "child1"},
        [React.createElement("h1",{}, "I'm an h1 tag"),
        React.createElement("h2",{}, "I'm an h2 tag")] 
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

