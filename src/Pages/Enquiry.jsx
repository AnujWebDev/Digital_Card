import React from "react";
import "./Enquiry.css"
const Enquiry = () => {
  return (
    <div className="z-0" id="enquiry">
      <form
        className="form1 pl-8 pr-8 rounded shadow-lg w-full"
      >
        <h1 className="text-4xl border text-primary text-center p-10 font-bold mb-6">
          Let's Connect
        </h1>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-black text-lg font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-purple-700"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-black text-lg font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-purple-700"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-black text-lg font-bold mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your number"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-purple-700"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-black text-lg font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter message here"
            rows="2"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-purple-700"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-primary w-full text-white p-4 mb-5 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Enquiry;
