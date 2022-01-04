import React, { useState } from "react";

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s


function App() {

const [inputText, setInputText] = useState("");
const [item, setItem] = useState([]);

function onListChange(event){
  setInputText(event.target.value);
}

function onBtnClick(event){
  setItem(prevItem => {
       return [...prevItem, inputText]
     })
  setInputText("");
}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={onListChange} type="text" value={inputText}/>
        <button onClick={onBtnClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map(item => <li>{item}</li> )}
        </ul>
      </div>
    </div>
  );
}

export default App;
