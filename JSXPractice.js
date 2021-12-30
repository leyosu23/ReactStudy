//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Jhon Doe.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";
const date = new Date();
const year = date.getFullYear();
ReactDOM.render(
  <div>
    <p>Created by YS</p>
    <p>Copyright {year}.</p>
    </div>,
    document.getElementById("root")
);