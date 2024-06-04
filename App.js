const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ])
);

const heading = React.createElement("h1", {}, "Hello React!");
const root = ReactDOM.createRoot(document.getElementById("root"));

const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root.render(heading);
root.render(parent);
