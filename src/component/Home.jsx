import React from "react";
import Products from './Products';
import SlideShow from "./Slide";
import SlideTest from "./SlideShow";

const Home = () => {
  return (
    <div className="hero">
      <SlideShow/>
      <Products/>
    </div>
  );
};
export default Home;
