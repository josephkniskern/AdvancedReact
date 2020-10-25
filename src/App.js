import React, { Component } from "react";
import MoviePage from "./context/MoviePage";

export default class App extends Component {
  state = { currentUser: { name: "Tucker" } };

  render() {
    return (
      <div>
        <MoviePage />
      </div>
    );
  }
}
