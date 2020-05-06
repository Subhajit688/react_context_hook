import React, { Component, createContext } from 'react';
export const AuthContext = createContext();

export default class AuthContextProvider extends Component {
  state = {
    isAuthenticate: false,
  };

  toggleAuth = () => {
    this.setState({
      isAuthenticate: !this.state.isAuthenticate,
    });
  };
  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, toggleAuth: this.toggleAuth }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
