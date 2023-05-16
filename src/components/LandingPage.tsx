import React, { Component } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import login from "./Login";
import Register from "./Register";
import Profile from "./Profile";

export default class LandingPage extends Component {
  render() {
    return <div>{routes}</div>;
  }
}
const Header = () => {
  return (
    <header>
      <NavLink to="/">Login</NavLink>
      <br></br>
      <NavLink to="register">Register</NavLink>
      <br></br>
      <NavLink to="profile">Profile</NavLink>
      <br></br>
      <NavLink to="mypage">MyPage</NavLink>
    </header>
  );
};
const routes = (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" Component={login} />
      <Route path="/register" Component={Register} />
      <Route path="/profile" Component={Profile} />
      <Route
        path="/mypage"
        Component={() => {
          window.location.href = "https://www.youtube.com/";
          return null;
        }}
      />
    </Routes>
  </BrowserRouter>
);
