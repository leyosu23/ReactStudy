//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(
<div>
  <h1>H1 heading</h1>
  <ul>
  <li>hey</li>
  <li>hey</li>
  <li>hey</li>
  </ul>
</div>, 
  document.getElementById("root"));

