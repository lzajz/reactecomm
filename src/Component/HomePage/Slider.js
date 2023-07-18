import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import "./HomePage.css";
import Product from "../Product/Product";

// array for slider images
const productArray = [
  {
    image: process.env.PUBLIC_URL + "/images/Household.jpg",
  },
  {
    image: process.env.PUBLIC_URL + "/images/clothing.jpg",
  },
  {
    image: process.env.PUBLIC_URL + "/images/accessories.jpg",
  },
];
const slideShow = () => {
  const settings = {
    infinite: true,
    speed: 550,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  //goes through our list one by one and returns a product componet for us
  const sliderProducts = productArray.map((product) => (
    <Product image={product.image} title={product.title} />
  ));

  return (
    <Slider className="slider" {...settings}>
      {sliderProducts}
    </Slider>
  );
};

export default slideShow;
