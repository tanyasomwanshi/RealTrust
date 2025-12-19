import React, { useState } from "react";
import axios from "axios";

const Hero = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      alert("Request submitted!");
      setFormData({ fullName: "", email: "", mobile: "", city: "" });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className="relative bg-cover bg-center h-[600px]"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="container mx-auto px-6 h-full flex items-center justify-between relative z-10">
        <div className="text-white max-w-lg">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Consultation, <br /> Design, <br /> & Marketing
          </h1>
          <p className="text-xl">Not Your Average Realtor</p>
        </div>

        <div className="bg-primary/90 p-8 rounded-lg shadow-lg w-[400px]">
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Get a Free <br /> Consultation
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 rounded bg-transparent border border-white text-white placeholder-white/80 focus:outline-none focus:bg-white/10"
              required
            />
            <input
              name="email"
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-transparent border border-white text-white placeholder-white/80 focus:outline-none focus:bg-white/10"
              required
            />
            <input
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full p-3 rounded bg-transparent border border-white text-white placeholder-white/80 focus:outline-none focus:bg-white/10"
              required
            />
            <input
              name="city"
              placeholder="Area, City"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-3 rounded bg-transparent border border-white text-white placeholder-white/80 focus:outline-none focus:bg-white/10"
              required
            />

            <button
              type="submit"
              className="w-full bg-accent hover:bg-orange-600 text-white font-bold py-3 rounded mt-2 transition"
            >
              Get Quick Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
