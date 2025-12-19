import React, { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://realtrust-85bg.onrender.com/api/projects")
      .then((res) => setProjects(res.data));
  }, []);

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-2">
          Our Projects
        </h2>
        <p className="text-center text-gray-500 mb-12">
          We know what buyers are looking for...
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="shadow-lg rounded-lg overflow-hidden border border-gray-100"
            >
              <img
                src={project.imageUrl || "https://via.placeholder.com/300"}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <button className="bg-accent text-white px-6 py-2 rounded text-sm font-semibold uppercase tracking-wider">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
