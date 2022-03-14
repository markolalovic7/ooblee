import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class CustomPagingSlider extends Component {
  render() {
    const baseUrl = "https://s3.amazonaws.com/static.neostack.com/img/react-slick";
    const settings = {
      customPaging: function (i) {
        return (
          <a>
            <img src={`${baseUrl}/abstract0${i + 1}.jpg`} />
          </a>
        );
      },
      prodInfo: this.props.productInfo,
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        {console.log("settings", settings)}
        <Slider {...settings}>
          <div>
            <img src={baseUrl + "/abstract01.jpg"} />
          </div>
          <div>
            <img src={baseUrl + "/abstract02.jpg"} />
          </div>
          <div>
            <img src={baseUrl + "/abstract03.jpg"} />
          </div>
          <div>
            <img src={baseUrl + "/abstract04.jpg"} />
          </div>
        </Slider>
      </div>
    );
  }
}