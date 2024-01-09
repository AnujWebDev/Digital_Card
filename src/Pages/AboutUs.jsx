import React from "react";
import web from "../assets/web.png"
import ux from "../assets/ux.webp"
import e from "../assets/eco.png"
import soft from "../assets/soft2.png"
import mob from "../assets/mob2.png"
import cr from "../assets/cr.png"
import pt from "../assets/pt.png"
import company from "../assets/company.jpg"
import "./AboutUs.css";
import Slider from "./Slider";
const AboutUs = () => {
  return (
    <div id="about" className=" overflow-hidden">
      <div className="head bg-primary mt-5 w-40">
        <h1 className="text-center text-xl font-bold text-white font-plus-jakarta-sans p-3">
          About Us
        </h1>
      </div>
      <div
        className="rounded-full p-3 mt-5 border bg-primary text-white transition duration-500 text-center ease-in-out transform hover:bg-white hover:scale-90 hover:text-black"
      >
        <p>Company Name:i-SOFTZONE</p>
      </div>
      <div>
        <Slider/>
      </div>
      <div
        className="rounded-full p-3 mt-5 border bg-primary text-white transition duration-500 text-center ease-in-out transform hover:bg-white hover:scale-90 hover:text-black"
      >
        <p>Nature Of Business:Software & Development Company	</p>
      </div>
      <div>
          <p className="p-2 w-full bg-primary text-center rounded-full text-white mt-5">Our Services</p>
      </div>
      <div data-aos="fade-right" data-aos-duration="1000" className="services ml-5 hover:bg-primary duration-500  ease-in-out transform hover:text-white shadow-2xl p-2 flex mt-5 w-[95%]">
        <div className="rounded-full ml-5 p-3 border shadow-inner">
          <img src={web} alt="web" className=" w-14 h-14"></img>
          </div>
          <p className="text-center mt-[25px] p-2">Web application development</p>
      </div>
      <div data-aos="fade-right" data-aos-duration="1000" className="services ml-5 overflow-hidden  hover:bg-primary duration-500  ease-in-out transform hover:text-white shadow-2xl p-2 flex mt-5 w-[95%]">
        <div className="rounded-full ml-5 p-3 border shadow-inner">
          <img src={ux} alt="web" className=" mix-blend-multiply w-14 h-14"></img>
          </div>
          <p className="text-center mt-[25px] p-2">Develop ui ux base design</p>
      </div>  
      <div data-aos="fade-right" data-aos-duration="1000" className="services ml-5 overflow-hidden  hover:bg-primary duration-500  ease-in-out transform hover:text-white shadow-2xl p-2 flex mt-5 w-[95%]">
        <div className="rounded-full ml-5 p-3 border shadow-inner">
          <img src={e} alt="web" className=" mt-1  w-14 h-14"></img>
          </div>
          <p className="text-center mt-[25px] p-2">E-commerce solution development</p>
      </div>  
      <div data-aos="fade-right" data-aos-duration="1000" className="services ml-5 overflow-hidden hover:bg-primary duration-500  ease-in-out transform hover:text-white shadow-2xl p-2 flex mt-5 w-[95%]">
        <div className="rounded-full ml-5 p-3 border shadow-inner">
          <img src={soft} alt="web" className=" mix-blend-multiply mt-1 w-14 h-14"></img>
          </div>
          <p className="text-center mt-[25px] p-2">Software application development</p>
      </div>  
      <div data-aos="fade-right" data-aos-duration="1000" className="services ml-5 overflow-hidden hover:bg-primary duration-500  ease-in-out transform hover:text-white shadow-2xl p-2 flex mt-5 w-[95%]">
        <div className="rounded-full ml-5 p-3 border shadow-inner">
          <img src={mob} alt="web" className=" mt-1 w-14 h-14"></img>
          </div>
          <p className="text-center mt-[25px] p-2">Mobile application development</p>
      </div>
      <div data-aos="fade-right" data-aos-duration="1000" className="services ml-5 overflow-hidden hover:bg-primary duration-500  ease-in-out transform hover:text-white shadow-2xl p-2 flex mt-5 w-[95%]">
        <div className="rounded-full ml-5 p-3 border shadow-inner">
          <img src={cr} alt="web" className=" mt-1 w-14 h-14"></img>
          </div>
          <p className="text-center mt-[25px] p-2">Creative design with advanced technology</p>
      </div>
      <div data-aos="fade-right" data-aos-duration="1000" className="services ml-5 overflow-hidden mb-5 hover:bg-primary duration-500  ease-in-out transform hover:text-white shadow-2xl p-2 flex mt-5 w-[95%]">
        <div className="rounded-full ml-5 p-3 border shadow-inner">
          <img src={pt} alt="web" className=" mt-2 w-14 h-14"></img>
          </div>
          <p className="text-center mt-[25px] p-2">Highly knowledgeable & professionals team</p>
      </div>    
      <div>
        <img src={company} alt="company"></img>
        <div data-aos="fade-right" data-aos-duration="1000" className="head bg-primary p-2 w-80">
          <p className="text-xl font-bold text-white font-plus-jakarta-sans p-3">
            *WELCOME TO i-SOFTZONE*
          </p>
        </div>
        <p className="text-left text-md font-bold font-plus-jakarta-sans p-3">
          *i-Softzone has proved its excellence in the field of web design & web
          development and today it has successfully established itself as one of
          the best and most reliable offshore ecommerce web site design &
          development, software designing company where you can outsource your
          services for affordable prices.*
        </p>
        <div className="bg-primary text-right p-2 ml-12 rounded-lg text-white w-80">
          <p data-aos="fade-left" data-aos-duration="1000" className=" text-md text-md font-bold font-plus-jakarta-sans p-3">
            *i-Softzone empowers the business professional to solve complex
            problems with elegant mobile solutions  that  are simple to build, easy
            to manage and available to everyone.*
          </p>
        </div>
        <div className="bg-primary text-left p-2  text-white w-80 rounded-lg mt-2 ">
          <p data-aos="fade-right" data-aos-duration="1000" className="text-md text-md font-bold font-plus-jakarta-sans p-3">
            *i-Softzone has excellent professional expertise to present you
            effectively to the current and potential web audience.*
          </p>
        </div>
        <div className="bg-primary text-right p-2 ml-12 mt-2 rounded-lg text-white w-80">
          <p data-aos="fade-left" data-aos-duration="1000" className=" text-md text-md font-bold font-plus-jakarta-sans p-3">
            *Our mission is to lead in the various avenues of Software Outsourcing
            market and deliver cost effective and required solutions to its
            prospective clients.*
          </p>
        </div>
        <div className="bg-primary text-left p-2  text-white w-80 rounded-lg mt-2 " >
          <p data-aos="fade-right" data-aos-duration="1000" className="text-left text-md text-md font-bold font-plus-jakarta-sans p-3">
            *Vision To earn global admiration as an IT Outsource, by building and
            maintaining long-lasting relationship with people and technology and
            deliver functional software and excellent services.*
          </p>
        </div>
      </div>
      <div>
        <ul>
          <p className="text-xl text-center font-semibold py-5">
            Important links
          </p>
          <a href="">
            <li data-aos="flip-up" data-aos-duration="1000" className="p-3 border text-black w-full rounded transition duration-500 text-center ease-in-out transform hover:bg-primary hover:text-white hover:scale-90">
              *WHATSAPP LINK*:https://www.facebook.com/isoftzone/
            </li>
          </a>
          <a href="">
            <li data-aos="flip-up" data-aos-duration="1000" className="p-3 border text-black w-full rounded transition duration-500 text-center ease-in-out transform hover:bg-primary hover:text-white hover:scale-90">
              *FACEBOOK PAGE LINK*:https://www.facebook.com/isoftzone/
            </li>
          </a>
          <a href="">
            <li data-aos="flip-up" data-aos-duration="1000" className="p-3 border text-black w-full rounded transition duration-500 text-center ease-in-out transform hover:bg-primary hover:text-white hover:scale-90">
              *TWITTER PAGE LINK*:https://twitter.com/isoftzone?lang=en
            </li>
          </a>
          <a href="">
            <li data-aos="flip-up" data-aos-duration="1000" className="p-3 border text-black w-full rounded transition duration-500 text-center ease-in-out transform hover:bg-primary hover:text-white hover:scale-90">
              *LINKEDIN PAGE LINK*:https://in.linkedin.com/company/i-softzone
            </li>
          </a>
          <a href="">
            <li data-aos="flip-up" data-aos-duration="1000" className="p-3 border text-black w-full rounded transition duration-500 text-center ease-in-out transform hover:bg-primary hover:text-white hover:scale-90">
              *MOBILE APP
              LINK*:https://play.google.com/store/apps/details?id=com.isoftzone.yoappstore
            </li>
          </a>
          <a href="">
            <li data-aos="flip-up" data-aos-duration="1000" className="p-3 border text-black w-full rounded transition duration-500 text-center ease-in-out transform hover:bg-primary hover:text-white hover:scale-90">
              *I-SOFTZONE MAP LOCATION*:https://g.page/isoftzone?share
            </li>
          </a>
          <a href="">
            <li data-aos="flip-up" data-aos-duration="1000" className="p-3 border text-black w-full rounded transition duration-500 text-center ease-in-out transform hover:bg-primary hover:text-white hover:scale-90">
              *WHATSAPP LINK*:https://www.facebook.com/isoftzone/
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
