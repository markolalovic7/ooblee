import React, { useState } from "react";
import { HomeOutlined, HomeFilled, ShopOutlined, MailOutlined } from "@ant-design/icons";
import './Navigation.scss';
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className={'header-menu flex-center'} >
      <Link key="home" to="/" className="desktop-visible home">
        <HomeFilled />
        <span>Home</span>
      </Link>
      {/* <Link to="#" key="search" className="desktop-visible">
        <SearchOutlined />
        <span>Search</span>
      </Link> */}


      {/* <Link to="/store" key="store" className="store">
        <ShopOutlined />
        <span>Store</span>
      </Link> */}
      <Link to="/create-store" key="createStore" className="store">
        <ShopOutlined />
        <span>Create</span>
      </Link>
    </div>
  );
}

export default Navigation;
