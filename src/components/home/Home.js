import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import biteBank2 from "../../images/biteBank2.png";
import pic1 from "../../images/pic1.jpg";
import pic2 from "../../images/pic2.jpg";
import pic3 from "../../images/pic3.jpg";
import pic4 from "../../images/pic4.jpg";
import pic5 from "../../images/pic5.jpg";
import "./home.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    className="home"
    src={biteBank2}
    onDragStart={handleDragStart}
    alt="biteBank"
  />,
  <img
    className="home-img"
    src={pic1}
    onDragStart={handleDragStart}
    alt="food"
  />,
  <img
    className="home-img"
    src={pic2}
    onDragStart={handleDragStart}
    alt="food2"
  />,
  <img
    className="home-img"
    src={pic3}
    onDragStart={handleDragStart}
    alt="food3"
  />,
  <img
    className="home-img"
    src={pic4}
    onDragStart={handleDragStart}
    alt="food4"
  />,
  <img
    className="home-img"
    src={pic5}
    onDragStart={handleDragStart}
    alt="food5"
  />,
];

const Home = () => {
  return <AliceCarousel mouseTracking items={items} />;
};

export default Home;
