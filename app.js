/** 
<div id="parent">
    <div id="child">
        <h1>I m a H1 tag 1</h1>
        <h1>I m a H1 tag 2</h1>
    </div>
</div> 
*/



const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement("div", { id: "child" }, [
            React.createElement("h1", {}, "I m a H1 tag"),
            React.createElement("h1", {}, "I m a H1 tag"),
        ]),
        React.createElement("div", { id: "child" }, [
            React.createElement("h1", {}, "I m a H1 tag"),
            React.createElement("h1", {}, "I m a H1 tag"),
        ])
    ]
);

const heading = React.createElement("h1", { id: "heading", xyz: 10}, "Hello React");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);