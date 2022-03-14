import React from "react";
import './SingleProduct.scss';
import { Layout, Carousel, Button } from "antd";
import Slider from "react-slick";
import slide1 from '../../img/slide1.png';
import slide2 from '../../img/slide2.png';
import slide3 from '../../img/slide3.png';
import {
  PlusOutlined
} from '@ant-design/icons';
import CustomPagingSlider from "./CustomPagingSlider";
import ProductInfo from "./ProductInfo";

const { Content } = Layout;

function SingleProduct() {

  return (
    <Content>
      <div className="site-layout-content single-page-wrapper">
        <CustomPagingSlider productInfo={<ProductInfo />} />
        <ProductInfo />
      </div>
    </Content>
  );
}

export default SingleProduct;