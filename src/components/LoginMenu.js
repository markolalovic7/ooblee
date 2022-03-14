import React, { useState } from "react";
import { Drawer, Button, Divider } from "antd";
import { BellOutlined, UserOutlined, ShoppingCartOutlined, DeleteOutlined, HomeFilled, MailOutlined } from "@ant-design/icons";
import slide2 from '../../src/img/slide2.png';
import './LoginMenu.scss';
import { Link } from "react-router-dom";

function LoginMenu() {

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };


  return (
    <>
      <div
        className={'header-menu right-menu flex-center'}
      >
        <Link to="#">
          <BellOutlined />
          <span>Notifications</span>
        </Link>
        <Link to="#" key="messages" className="desktop-visible">
          <MailOutlined />
          <span>Messages</span>
        </Link>
        <Link to="#" className="relative" onClick={showDrawer}>
          <small className="absolute">1</small>
          <ShoppingCartOutlined />
          <span>Cart</span>
        </Link>
        <Link to="#" className="profile">
          <UserOutlined />
          <span>Profile</span>
        </Link>
      </div>
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
    </>
  );
}

export default LoginMenu;
