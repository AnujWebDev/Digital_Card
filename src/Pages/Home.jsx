import React, { useState } from "react";
import logo from "../assets/logo.png";
import { LuPhoneCall } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { RiMapPin2Line } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { CgWebsite } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div id="home">
        <div data-aos="zoom-in" data-aos-duration="1000" className="flex items-center justify-center bg w-full relative">
          <img
            src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"
            alt="logo"
            className="bottom-0 w-40 h-40 -mb-[65px] absolute"
          />
        </div>
        <div data-aos="zoom-in" data-aos-duration="1000">
          <p className="mt-16 text-2xl font-bold text-center">
            Mr. Pranay Gupta
          </p>
          <p className="text-md italic text-center">(Owner)</p>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1000" className="mt-5 flex flex-row justify-between">
          <a
            className="rounded-full p-3 border bg-primary text-white transition duration-500 text-center ease-in-out transform hover:bg-white hover:scale-90 hover:text-black"
            target="_blank"
            href="tel:9819695315"
          >
            <LuPhoneCall className="text-2xl" />
          </a>
          <a
            className="rounded-full p-3 border bg-primary text-white transition duration-500 text-center ease-in-out transform hover:bg-white hover:scale-90 hover:text-black"
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=%2B917415664456&text=Got+reference+from+your+Digital+vCard.+Want+to+know+more+about+your+products+and+services.&type=phone_number&app_absent=0"
          >
            <FaWhatsapp className="text-2xl" />
          </a>
          <a
            className="rounded-full p-3 border bg-primary text-white transition duration-500 text-center ease-in-out transform hover:bg-white hover:scale-90 hover:text-black"
            target="_blank"
            href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x3962e2cbd98f0bf7:0xbafbbde339deec8a?source=g.page."
          >
            <RiMapPin2Line className="text-2xl" />
          </a>
          <a
            className="rounded-full p-3 border bg-primary text-white transition duration-500 text-center ease-in-out transform hover:bg-white hover:scale-90 hover:text-black"
            target="_blank"
            href="mailto:info@isoftzone.com"
          >
            <CiMail className="text-2xl" />
          </a>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1000" className="flex flex-row mt-5 justify-between">
          <a
            className="rounded-full p-3 border bg-primary text-white transition duration-500 text-center ease-in-out transform hover:bg-white hover:scale-90 hover:text-black"
            target="_blank"
            href="tel:9819695315"
          >
            <FaFacebook className="text-2xl" />
          </a>
          <a
            className="rounded-full p-3 border bg-primary text-white transition duration-500 text-center ease-in-out transform hover:bg-white hover:scale-90 hover:text-black"
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=%2B917415664456&text=Got+reference+from+your+Digital+vCard.+Want+to+know+more+about+your+products+and+services.&type=phone_number&app_absent=0"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <a
            className="rounded-full p-3 border bg-primary text-white transition duration-500 text-center ease-in-out transform hover:bg-white hover:scale-90 hover:text-black"
            target="_blank"
            href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x3962e2cbd98f0bf7:0xbafbbde339deec8a?source=g.page."
          >
            <IoLogoLinkedin className="text-2xl" />
          </a>
          <a
            className="rounded-full p-3 border bg-primary text-white transition duration-500 text-center ease-in-out transform hover:bg-white hover:scale-90 hover:text-black"
            target="_blank"
            href="mailto:info@isoftzone.com"
          >
            <CgWebsite className="text-2xl" />
          </a>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1000" className="flex justify-between">
          <a className="border rounded-lg shadow-lg mt-5 text-primary transition duration-500 text-center ease-in-out transform hover:bg-primary hover:scale-90 hover:text-white"  href="">
            <p className="flex text-center p-3"><CiMail className="text-2xl"/>Email address:<br/>info@isoftzone.com</p>
          </a>
          <a className="border rounded-lg shadow-lg mt-5 text-primary transition duration-500 text-center ease-in-out transform hover:bg-primary hover:scale-90 hover:text-white"  href="">
            <p className="flex text-center p-3"><LuPhoneCall className="text-2xl"/>Phone Number:<br/>+ 91 74156-64456</p>
          </a>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1000" className="flex justify-between">
          <a className="border rounded-lg shadow-lg mt-5 text-primary transition duration-500 text-center ease-in-out transform hover:bg-primary hover:scale-90 hover:text-white"  href="">
            <p className="flex text-center p-3"><CgWebsite className="text-2xl"/>web address:<br/>http://isoftzone.com</p>
          </a>
          <a className="border rounded-lg shadow-lg mt-5 text-primary transition duration-500 text-center ease-in-out transform hover:bg-primary hover:scale-90 hover:text-white"  href="">
            <p className="flex text-center p-3"><RiMapPin2Line className="text-2xl"/>Address:<br/>Indore,Madhya Pradesh</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
