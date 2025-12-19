import React, { useState } from "react";
import axios from "axios";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (!email) return;
    await axios.post("https://realtrust-85bg.onrender.com/api/subscribe", {
      email,
    });
    alert("Subscribed!");
    setEmail("");
  };

  return (
    <div className="bg-primary py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-4">
        <h3 className="text-white text-xl font-semibold">Subscribe Us</h3>
        <input
          type="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded w-full md:w-96 focus:outline-none"
        />
        <button
          onClick={handleSubscribe}
          className="bg-white text-primary font-bold py-3 px-8 rounded hover:bg-gray-100 transition"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
