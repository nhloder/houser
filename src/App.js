import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";
import Wizard from "./components/wizard/Wizard";
import routes from "./routes";

function App() {
  return (

      <div className="App">
        <Header />
        {routes}
      </div>

  );
}

export default App;
