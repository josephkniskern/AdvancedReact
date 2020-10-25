import React, { Component } from "react";
import Login from "./context/Login";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";

export default class App extends Component {
  handleLoggedIn = (username) => {
    console.log(username);
    const user = { name: "Dave" };
    this.setState({ currentUser: user });
  };

  state = { currentUser: null };

  render() {
    return (
      <UserContext.Provider
        value={{
          currentUser: this.state.currentUser,
          onLoggedIn: this.handleLoggedIn,
        }}
      >
        <div>
          <MoviePage />
          <Login />
        </div>
      </UserContext.Provider>
    );
  }
}
