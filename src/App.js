import React, { Component } from "react";
import Searchbar from "./components/Searchbar";
import Header from "./components/layout/Header";
import Images from "./components/Images";
import axios from "axios";

import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      numImages: 0
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  //Could use .env file to keep api key private & seperate with back-end if necessary.
  async onSubmit(search) {
    await axios
      .get(
        `https://api.unsplash.com/search/photos/?client_id=$e3b3207e3bfcb7d51c9ab7c8b5a7b1d2c03bd8b3787bd22d7e66820ce5f2145e&per_page=100&orientation=landscape&query=${search}}`,
        {
          params: { query: search }
        }
      )
      .then(result =>
        this.setState({
          images: result.data.results,
          numImages: result.data.total
        })
      );
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div>
            <Header> /></Header>
            <Searchbar onSubmit={this.onSubmit} />
            <Images images={this.state.images} />
          </div>
        </div>
      </div>
    );
  }
}
