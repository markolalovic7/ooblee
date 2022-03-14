//import logo from './logo.svg';
import React from "react";
import Navigation from './Navigation';
import { Layout } from "antd";
import LoginMenu from "./LoginMenu";
import { Link } from "react-router-dom";

const { Content } = Layout;

function Header() {

  return (
    <header className="App-header flex-center relative">
      <Navigation />
      <div className="absolute logo"><Link to="#">ooblee</Link></div>
      <LoginMenu />
    </header>
  );
}

export default Header;