import React, { Component } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import Header from "./components/layout/Header";

export default class App extends Component {
  state = {
    images: [],
    numImages: 0
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <div>
            <Header></Header>
            <Searchbar></Searchbar>
          </div>
        </div>
      </div>
    );
  }
}
