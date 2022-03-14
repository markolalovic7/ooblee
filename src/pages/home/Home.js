//import logo from './logo.svg';
import React, { useState } from "react";
import { Layout, Carousel } from "antd";
import slide1 from '../../img/slide1.png';
import slide2 from '../../img/slide2.png';
import slide3 from '../../img/slide3.png';
import PostsWrapper from "../../components/PostsWrapper";
import Header from "../../components/Header";

const { Content } = Layout;

function Home() {

  const contentStyle = {
    //height: '160px',
    color: '#fff',
    //lineHeight: '160px',
    textAlign: 'center',
    background: '#ff6067',
  };

  return (
    <>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}><img src={slide1} alt="slide1" /></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img src={slide2} alt="slide2" /></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img src={slide3} alt="slide3" /></h3>
        </div>
      </Carousel>
      <br></br><br></br>
      <Content>
        <div className="site-layout-content">
          <PostsWrapper />
        </div>
      </Content>
    </>
  );
}

export default Home;