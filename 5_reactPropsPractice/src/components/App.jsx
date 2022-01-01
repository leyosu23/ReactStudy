import React from "react";
import Card from "./Card";
import Contacts from "../contacts"

function App() {

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name="Biyonce"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        phone="+123 456 789"
        email="b@beyonce.com"
      />

      <Card
        name="Jack Bauer"
        img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        number="+987 654 321"
        email="jack@nowhere.com"
      />
    </div>
  );
}

export default App;
