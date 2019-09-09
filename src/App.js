import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import India from "./components/India";
import French from "./components/French";

function App() {
  return (
    <div className="App">
      <India currency="Rupees" name="India" pin="12345"/>
      <French currency="Euro" name="Franse" pin="567890"/>
    </div>
  );
}
export default App;
