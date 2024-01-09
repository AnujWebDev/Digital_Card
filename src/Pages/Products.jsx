import React from "react";
import product from "../assets/product.jpg";
import "./Products.css";

const Products = () => {
  return (
    <div id="products" className="overflow-hidden">
      <div className="head bg-primary mt-5 w-60">
        <h1 className="text-center text-xl font-bold text-white font-plus-jakarta-sans p-3">
        PRODUCT LINKS
        </h1>
      </div>
      <img src={product}></img>
      <div data-aos="fade-right" data-aos-duration="1000"
        className="round overflow-hidden p-3 mt-5 border  bg-white text-black transition duration-500 text-center ease-in-out transform hover:bg-primary hover:scale-90 hover:text-white"
      >
        <p>ECO - E-COMMERCE OSIYA</p>
        <p>ECO - E-COMMERCE OSIYA MOBILE APP</p>
        <a href="https://play.google.com/store/apps/details?id=com.isoftzone.osiya">https://play.google.com/store/apps/details?id=com.isoftzone.osiya</a>
      </div>
      <div data-aos="fade-left" data-aos-duration="1000"
        className=" overflow-hidden round1 p-3 mt-5 border  bg-primary text-white transition duration-500 text-center ease-in-out transform hover:bg-white hover:scale-90 hover:text-black"
      >
        <p>BOMBAY SUPARI</p>
        <p>BOMBAY SUPARI MOBILE APP</p>
        <a href="https://play.google.com/store/apps/details?id=com.isoftzone.bombaysupari">https://play.google.com/store/apps/details?id=com.isoftzone.bombaysupari</a>
      </div>
      <div data-aos="fade-right" data-aos-duration="1000"
        className="round overflow-hidden p-3 mt-5 border  bg-white text-black transition duration-500 text-center ease-in-out transform hover:bg-primary hover:scale-90 hover:text-white"
      >
        <p>BHAVESH HARDWARE</p>
        <p>BHAVESH HARDWARE MOBILE APP</p>
        <a href="https://play.google.com/store/apps/details?id=com.isoftzone.bhaveshhardware">https://play.google.com/store/apps/details?id=com.isoftzone.bhaveshhardware</a>
      </div>
    </div>
  );
};

export default Products;
