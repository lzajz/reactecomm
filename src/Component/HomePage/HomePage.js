import React from "react";
import Footer from "../Footer/Footer";
import "./HomePage.css";
import Slider from "./Slider";

const HomePage = () => {
  return (
    <>
      <div id="heroprod">
        <img
          className="prodhero"
          src="https://images.unsplash.com/photo-1465256410760-10640339c72c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          alt="Oaxaca wallpaper"
        />

        <p className="herotext">From our hands to your door</p>
      </div>
      <h1 className="quote">
        "The beauty of the world lies in the diversity of its people"
      </h1>
      <Slider />
      <Footer />
    </>
  );
};

export default HomePage;
