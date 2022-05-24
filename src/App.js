import React from "react";
import Greet from "./components/Greet";

const name = prompt("What is your name? ")

function App() {
  return (
    <div>
      <Greet 
        name={name}
      />
    </div>);
}

export default App;
