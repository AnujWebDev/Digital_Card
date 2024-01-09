import React from "react";
import payment from "../assets/payment.png";
import "./Payment.css";
const Payment = () => {
  return (
    <div id="payment">
      <div className="head bg-primary mt-5 w-60">
        <h1 className="text-center text-xl font-bold text-white font-plus-jakarta-sans p-3">
          PAYMENTS ONLINE
        </h1>
      </div>
      <div
        className="p-3 my-3 border text-white bg-primary w-full rounded transition duration-500 text-center ease-in-out transform hover:bg-white hover:text-black"
      >
        <ul>
        <li className="text-md text-left font-bold">Paytm Number: +91 74156-64456</li>
        <li className="text-md text-left font-bold">
          PhonePay Number: +91 74156-64456
        </li>
        <li className="text-md text-left font-bold">
          Google pay Number: +91 74156-64456
        </li>
        </ul>
      </div>
      <img src={payment}></img>
      <div
        className="p-3 my-3 border text-white bg-primary w-full rounded transition duration-500 text-center ease-in-out transform hover:bg-white hover:text-black"
      >
        <ul>
        <li className="text-2xl p-2 font-bold">Account Details:</li>
        <li className="text-md text-left font-semibold">Bank Name: ICICI BANK</li>
        <li className="text-md text-left font-semibold">IFSC code: ICIC000094</li>
        <p className="text-md text-left font-semibold">
          Account Holder Name: Mr. Pranay Gupta{" "}
        </p>
        <li className="text-md text-left font-semibold">
          Account Number: 09450500070{" "}
        </li>
        <li className="text-md text-left font-semibold">
          Account Type: Current accounts{" "}
        </li>
        </ul>
      </div>
    </div>
  );
};

export default Payment;
