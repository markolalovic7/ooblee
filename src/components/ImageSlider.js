import React from "react";
import { Carousel } from "antd";

function ImageSlider(props) {

  const login1ImgUrl = props;

  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#ff6067',
  };

  return (
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}><img src={login1ImgUrl} alt="login1" /></h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  )
}

export default ImageSlider