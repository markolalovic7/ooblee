import React from "react";
import { Carousel } from "antd";
import './CreateStore.scss';
import store1 from '../../img/store1.png';
import store2 from '../../img/store2.png';

function StoreImagSlider() {

  const contentStyle = {
    // height: '400px',
    color: '#fff',
    textAlign: 'center',
    background: 'transparent',
  };

  return (
    <Carousel autoplay>
      <div>
        <div style={contentStyle}>
          <h2>Start your own business</h2>
          <img src={store1} alt="store1" />
          <p><b>asdasd</b><br></br>sadasdsa</p>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <h2>Sell products / services without any commission</h2>
          <img src={store2} alt="store2" />
          <p><b>asdasd</b><br></br>sadasdsa</p>

        </div>
      </div>
    </Carousel>
  );
}

export default StoreImagSlider;