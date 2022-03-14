import React, { useState } from "react";
import { Drawer, Button, Divider } from "antd";
import slide2 from '../src/img/slide2.png';
import './App.scss';
import './Responsive.scss'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/Header";
import CreateStore from "./pages/create-store/CreateStore";
import CreateStore2 from "./pages/create-store/CreateStore2";
import GetStarted from "./pages/get-started/GetStarted";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import SignIn from "./pages/sign-in/SignIn";
import Store from "./pages/store/Store";
import { HomeOutlined, ShopOutlined, MailOutlined, BellOutlined, ShoppingCartOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import CreateItem from "./pages/store/CreateItem";
import SingleProduct from "./pages/single-product/SingleProduct";

function App() {

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Drawer
        closable
        title="Shopping Cart"
        placement="right"
        onClose={onClose}
        visible={visible}
        width={400}
      >
        <div className="cart-item">
          <h2>Title</h2>
          <div className={"display-flex"}>
            <div className="cart-img">
              <img src={slide2} alt="slide2" />
            </div>
            <div className="cart-info">
              <p><b>Quantity: </b>1</p>
              <p><b></b>7-8</p>
              <p><b>Price: </b>11.9 E</p>
              <p><b>Total price: </b>11.9 E</p>
            </div>
            <Button type="link" icon={<DeleteOutlined />} />
          </div>
        </div>
        <Divider />
        <div className="cart-btn">
          <Button type="default">Save</Button>
          <Button type="primary">Finish your order</Button>
        </div>
      </Drawer>


      <div className="App">
        <Router>
          <Header />
          <div className="main-wrap">
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/sign-in">
                <SignIn />
              </Route>
              <Route path="/get-started">
                <GetStarted />
              </Route>
              <Route path="/store">
                <Store />
              </Route>
              <Route path="/single-product">
                <SingleProduct />
              </Route>
              <Route path="/create-store">
                <CreateStore />
              </Route>
              <Route path="/create-store-2">
                <CreateStore2 />
              </Route>
              <Route path="/create-item">
                <CreateItem />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
          <footer className="footer-menu">
            <Link to="/store" key="store">
              <ShopOutlined />
            </Link>
            <Link to="#">
              <BellOutlined />
            </Link>
            <Link to="#" key="messages">
              Advertising
            </Link>
            <Link to="#" key="messages">
              <MailOutlined />
            </Link>
            <Link to="#" className="relative" onClick={showDrawer}>
              {/* <small className="absolute">1</small> */}
              <ShoppingCartOutlined />
            </Link>
          </footer>
        </Router>
      </div>
    </>
  );
}

export default App;
