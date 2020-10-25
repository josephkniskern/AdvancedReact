import React, { Component } from "react";
import CartContext from "./context/cartContext";
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
      <CartContext.Provider value={{ cart: [] }}>
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
      </CartContext.Provider>
    );
  }
}
