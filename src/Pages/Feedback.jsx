import React, { useState } from "react";
import { Space, Rate, Input, Button } from "antd";
import "./Feedback.css"

const Feedback = () => {
  const [value, setValue] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [reviews, setReviews] = useState([
    {
      name: "Saurabh Gholap",
      date: "2024-01-05",
      rating: 4,
      comment: "Great product!",
    },
    {
      name: "Harshal more",
      date: "2024-01-03",
      rating: 5,
      comment: "Absolutely wonderful!",
    },
    {
      name: "Asif iqbal Mansuri",
      date: "2024-01-03",
      rating: 3,
      comment: "Absolutely wonderful!",
    },
  ]);

  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  const handleFeedbackSubmit = () => {
    const newReview = {
      name,
      date: new Date().toISOString().split("T")[0],
      rating: value,
      comment: description,
    };
    setReviews([...reviews, newReview]);
    setValue(null);
    setName("");
    setDescription("");
  };

  return (
    <div id="feedback">
      <div className="head bg-primary mt-5 w-60">
        <h1 className="text-center text-xl font-bold text-white font-plus-jakarta-sans p-3">
          PAYMENTS ONLINE
        </h1>
      </div>
      <div>
        <div>
          <div className="mt-5 p-3 border text-black w-full rounded">
            <h2 className="text-lg font-semibold mb-3">Give Feedback</h2>
            <Input
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-3"
            />
            <Space>
              <Rate tooltips={desc} onChange={setValue} value={value} />
              {value ? <span>{desc[value - 1]}</span> : ""}
            </Space>
            <Input.TextArea
              placeholder="Enter your feedback description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-3 mb-3"
            />
            <button
              className="p-3 border w-full text-white bg-primary rounded transition duration-500 text-center ease-in-out transform hover:bg-white hover:text-black hover:scale-90"
              onClick={handleFeedbackSubmit}
            >
              Send Feedback
            </button>
          </div>
        </div>
        <div>
          {reviews.map((review, index) => (
            <div
              key={index}
              className="mb-4 mt-5 p-3 my-3 border text-black w-full rounded transition duration-500 text-center ease-in-out transform hover:bg-primary hover:text-white"
            >
              <h3 className="text-lg font-semibold">{review.name}</h3>
              <p className="text-sm text-gray-500">{review.date}</p>
              <div className="flex items-center justify-center">
                <Rate disabled value={review.rating} />
                <p className="ml-2">{desc[review.rating - 1]}</p>
              </div>
              <p className="mt-2">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
