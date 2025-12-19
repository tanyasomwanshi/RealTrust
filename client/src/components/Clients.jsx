import React, { useEffect, useState } from "react";
import axios from "axios";

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get("https://realtrust-85bg.onrender.com/api/clients")
      .then((res) => setClients(res.data));
  }, []);

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Happy Clients
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/4 text-center relative mt-8"
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <img
                  src={client.imageUrl || "https://via.placeholder.com/100"}
                  alt={client.name}
                  className="w-16 h-16 rounded-full border-4 border-white object-cover shadow-sm"
                />
              </div>
              <p className="text-gray-500 text-sm mt-8 mb-4 italic">
                "{client.description}"
              </p>
              <h4 className="text-primary font-bold">{client.name}</h4>
              <span className="text-gray-400 text-xs uppercase">
                {client.designation}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
