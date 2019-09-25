import React from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import Header from "./components/layout/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Searchbar></Searchbar>
    </div>
  );
}

export default App;
