import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
const [appClass, setAppClass] = useState(false)
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature


  function handleCLick() {
    setAppClass(appClass => !appClass)
  }

  return (
    <div className={appClass ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleCLick}>{appClass ? "Light" : "Dark"}Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
