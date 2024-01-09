import React, { useEffect, useState } from "react";
import { Link, Events, scrollSpy } from "react-scroll";

const DefaultNavbar = () => {

  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
    <div className="z-50">
      <nav>
        <div className="w-full z-50 fixed bottom-0 bg-primary">
          <div className="hidden sm:flex justify-between p-6 bg-primary">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={handleSetActive}
              className="p-3 border hover:cursor-pointer text-white w-full rounded transition duration-500 text-center ease-in-out transform hover:bg-white hover:text-black hover:scale-90"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={handleSetActive}
              className="p-3 border hover:cursor-pointer w-full text-white rounded transition duration-500 text-center ease-in-out transform hover:bg-white hover:text-black hover:scale-90"
            >
              About Us
            </Link>
            <Link
              to="products"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={handleSetActive}
              className="p-3 w-full border hover:cursor-pointer text-white rounded transition duration-500 text-center ease-in-out transform hover:bg-white hover:text-black hover:scale-90"
            >
              Products
            </Link>
            <Link
              to="payment"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={handleSetActive}
              className="p-3 border w-full hover:cursor-pointer text-white rounded transition duration-500 text-center ease-in-out transform hover:bg-white hover:text-black hover:scale-90"
            >
              Payments
            </Link>
            <Link
              to="feedback"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={handleSetActive}
              className="p-3 border w-full hover:cursor-pointer text-white rounded transition duration-500 text-center ease-in-out transform hover:bg-white hover:text-black hover:scale-90"
            >
              Feedback
            </Link>
            <Link
              to="enquiry"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={handleSetActive}
              className="p-3 border w-full hover:cursor-pointer text-white rounded transition duration-500 text-center ease-in-out transform hover:bg-white hover:text-black hover:scale-90"
            >
              Enquiry
            </Link>
          </div>
        </div>
          <div className="sm:hidden bg-primary fixed w-full z-50 bottom-0" id="mobile-menu">
            <div className="flex flex-row justify-center p-2 bg-primary">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
                className="py-2  px-[2px] border hover:cursor-pointer text-white rounded transition duration-500 text-center ease-in-out transform hover:bg-primary hover:text-white hover:scale-90"
              >
                Home
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
                className="py-2 px-[2px] border hover:cursor-pointer rounded transition duration-500 text-center ease-in-out transform text-white hover:bg-primary hover:text-white hover:scale-90"
              >
                About Us
              </Link>
              <Link
                to="products"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
                className="py-2 px-[2px] border hover:cursor-pointer rounded transition duration-500 text-center ease-in-out transform text-white hover:bg-primary hover:text-white hover:scale-90"
              >
                Products
              </Link>
              <Link
                to="payment"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
                className="py-2 px-[2px] border hover:cursor-pointer rounded transition duration-500 text-center ease-in-out transform text-white hover:bg-primary hover:text-white hover:scale-90"
              >
                Payments
              </Link>
              <Link
                to="feedback"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
                className="py-2 px-[2px] border hover:cursor-pointer rounded transition duration-500 text-center ease-in-out transform text-white hover:bg-primary hover:text-white hover:scale-90"
              >
                Feedback
              </Link>
              <Link
                to="enquiry"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
                className="py-2 px-[2px] border hover:cursor-pointer rounded transition duration-500 text-center ease-in-out transform hover:bg-primary text-white hover:text-white hover:scale-90"
              >
                Enquiry
              </Link>
            </div>
          </div>
      </nav>
    </div>
  );
};

export default DefaultNavbar;
