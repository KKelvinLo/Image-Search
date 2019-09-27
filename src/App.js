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
    const Apikey =
      "3b865726253202d2a6ab1984aeeab2c747e191ded0b5f29e64d0f9ee0fe414d6";
    await axios
      .get(
        `https://api.unsplash.com/search/photos/?client_id=${Apikey}&per_page=100&orientation=landscape&query=${search}}`,
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
