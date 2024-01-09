import React from "react";
import Marquee from "react-fast-marquee";
import Marquee1 from "../assets/marquee1.jpg";
import Marquee2 from "../assets/marquee2.jpg";
import Marquee3 from "../assets/marquee3.webp";
import Marquee4 from "../assets/marquee4.avif";
import Marquee5 from "../assets/marquee5.png";
import Marquee6 from "../assets/marquee6.avif";
import Marquee7 from "../assets/marquee7.avif";
import Marquee8 from "../assets/marquee8.jpg";

const Slider = () => {
  return (
    <div>
      <p className="text-md font-semibold  mt-5 text-center">
        Get a look in Our
      </p>
      <h2 className="text-4xl font-bold text-primary  mt-5 text-center">
        I-Softzone
      </h2>
      <Marquee pauseOnHover={true} className="cursor-pointer flex gap-3">
      {[Marquee1, Marquee2, Marquee3, Marquee4, Marquee5, Marquee6,Marquee7, Marquee8].map((image, index) => (
        <div key={index} className="group relative">
          <img
            src={image}
            alt={`image-${index}`}
            className="w-80 h-80 p-2 object-cover transition-transform transform group-hover:scale-105"
          />
          <div className="absolute inset-0 border border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      ))}
    </Marquee>


    </div>
  );
};

export default Slider;
