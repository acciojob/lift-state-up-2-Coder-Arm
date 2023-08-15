
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [inputValue,setInputValue] = useState("");


  return (
    <div className="parent">
    <h1>Parent Component</h1>
    {inputValue}
    <div className="child">
      <h2>Child Component</h2>
      <input type="text" onInput={e => setInputValue(e.target.value)}/>
    </div>
    </div>

  )
}

export default App
