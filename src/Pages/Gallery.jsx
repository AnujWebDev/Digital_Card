import React from "react";
import Marquee from "react-fast-Marquee";
import Marquee1 from "../assets/Marquee1.jpg";
import Marquee2 from "../assets/Marquee2.jpg";
import Marquee3 from "../assets/Marquee3.webp";
import Marquee4 from "../assets/Marquee4.avif";
import Marquee5 from "../assets/Marquee5.png";
import Marquee6 from "../assets/Marquee6.avif";
import Marquee7 from "../assets/Marquee7.avif";
import Marquee8 from "../assets/Marquee8.jpg";

const Gallery = () => {
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

export default Gallery;
