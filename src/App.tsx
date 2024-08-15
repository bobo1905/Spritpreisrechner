import React from "react";
import "./App.css";
import { NavbarComponent } from "./components/NavbarComponent";
import { FormComponents } from "./components/FormComponents";

function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <FormComponents></FormComponents>
    </div>
  );
}

export default App;
