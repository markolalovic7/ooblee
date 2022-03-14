import React from "react";
import { Button, Divider } from "antd";
import {
  PlusOutlined,
  EditOutlined
} from '@ant-design/icons';
import './Shop.scss';
import img from '../../img/torba.jpg';
import { useHistory } from "react-router";


function Shop() {
  let history = useHistory();

  function handleCreateItem() {
    history.push("/create-item");
  }

  function handleSingleProduct() {
    history.push("/single-product");
  }

  return (
    <div className="shop">
      <div className="add-new-shop-item flex-center">
        <div className="add-item" onClick={handleCreateItem}>
          <Button type="primary" icon={<PlusOutlined />}></Button>
          <span>Add new <br /> shop item</span>
        </div>
        <h2>Sell your products / services without any provision from ooblee</h2>
      </div>
      <Button type={"primary"}>Edit shop categories</Button>
      <Divider />
      <small>Showing: <b>All categories</b></small>
      <div className="categories text-align-left">
        <div className="category">Tech <Button type="link" icon={<EditOutlined />} /></div>
        <div className="items flex-center">
          <div className="item" onClick={handleSingleProduct}>
            <div className="image-wrapper" style={{ backgroundImage: `url(${img})` }}>
              <span className="price">15 E</span>
              <p className="title">Item title</p>
            </div>
            <Button type="default">Add to cart</Button>
          </div>
          <div className="item">
            <div className="image-wrapper" style={{ backgroundImage: `url(${img})` }}>
              <span className="price">15 E</span>
              <p className="title">Item title</p>
            </div>
            <Button type="default">Add to cart</Button>
          </div>
          <div className="item">
            <div className="image-wrapper" style={{ backgroundImage: `url(${img})` }}>
              <span className="price">15 E</span>
              <p className="title">Item title</p>
            </div>
            <Button type="default">Add to cart</Button>
          </div>
          <div className="item">
            <div className="image-wrapper" style={{ backgroundImage: `url(${img})` }}>
              <span className="price">15 E</span>
              <p className="title">Item title</p>
            </div>
            <Button type="default">Add to cart</Button>
          </div>
          <div className="item">
            <div className="image-wrapper" style={{ backgroundImage: `url(${img})` }}>
              <span className="price">15 E</span>
              <p className="title">Item title</p>
            </div>
            <Button type="default">Add to cart</Button>
          </div>
          <div className="item">
            <div className="image-wrapper" style={{ backgroundImage: `url(${img})` }}>
              <span className="price">15 E</span>
              <p className="title">Item title</p>
            </div>
            <Button type="default">Add to cart</Button>
          </div>
          <div className="item">
            <div className="image-wrapper" style={{ backgroundImage: `url(${img})` }}>
              <span className="price">15 E</span>
              <p className="title">Item title</p>
            </div>
            <Button type="default">Add to cart</Button>
          </div>
          <div className="item">
            <div className="image-wrapper" style={{ backgroundImage: `url(${img})` }}>
              <span className="price">15 E</span>
              <p className="title">Item title</p>
            </div>
            <Button type="default">Add to cart</Button>
          </div>
          <div className="item">
            <div className="image-wrapper" style={{ backgroundImage: `url(${img})` }}>
              <span className="price">15 E</span>
              <p className="title">Item title</p>
            </div>
            <Button type="default">Add to cart</Button>
          </div>
          <div className="item">
            <div className="image-wrapper" style={{ backgroundImage: `url(${img})` }}>
              <span className="price">15 E</span>
              <p className="title">Item title</p>
            </div>
            <Button type="default">Add to cart</Button>
          </div>
          <div className="item">
            <div className="image-wrapper" style={{ backgroundImage: `url(${img})` }}>
              <span className="price">15 E</span>
              <p className="title">Item title</p>
            </div>
            <Button type="default">Add to cart</Button>
          </div>
          <div className="item">
            <div className="image-wrapper" style={{ backgroundImage: `url(${img})` }}>
              <span className="price">15 E</span>
              <p className="title">Item title</p>
            </div>
            <Button type="default">Add to cart</Button>
          </div>
          <div className="item">
            <div className="image-wrapper" style={{ backgroundImage: `url(${img})` }}>
              <span className="price">15 E</span>
              <p className="title">Item title</p>
            </div>
            <Button type="default">Add to cart</Button>
          </div>
          <div className="item">
            <div className="image-wrapper" style={{ backgroundImage: `url(${img})` }}>
              <span className="price">15 E</span>
              <p className="title">Item title</p>
            </div>
            <Button type="default">Add to cart</Button>
          </div>
          <div className="item">
            <div className="image-wrapper" style={{ backgroundImage: `url(${img})` }}>
              <span className="price">15 E</span>
              <p className="title">Item title</p>
            </div>
            <Button type="default">Add to cart</Button>
          </div>
          <div className="item">
            <div className="image-wrapper" style={{ backgroundImage: `url(${img})` }}>
              <span className="price">15 E</span>
              <p className="title">Item title</p>
            </div>
            <Button type="default">Add to cart</Button>
          </div>
        </div>
        <Divider />
        <div className="category">Medical <Button type="link" icon={<EditOutlined />} /></div>
        <div className="items flex-center">
          <div className="item">
            <div className="image-wrapper" style={{ backgroundImage: `url(${img})` }}>
              <span className="price">15 E</span>
              <p className="title">Item title</p>
            </div>
            <Button type="default">Add to cart</Button>
          </div>
          <div className="item">
            <div className="image-wrapper" style={{ backgroundImage: `url(${img})` }}>
              <span className="price">15 E</span>
              <p className="title">Item title</p>
            </div>
            <Button type="default">Add to cart</Button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Shop;