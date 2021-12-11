import React from "react";
import ReactDOM from "react-dom";

const fname = "YS";
const lname = "Willson"

ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    <p>your lucky numbers is {Math.floor(Math.random() * 10 + 1)}
    </p>
  </div>,
  document.getElementById("root")
);
