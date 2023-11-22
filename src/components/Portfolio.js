import React, { useState } from "react";
import CardModal from "./CardModal";

import { projects } from "./PortfolioData";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showGame, setShowGame] = useState(false);

  const openModal = (project) => {
    setShowGame(false);
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowGame(false);
  };

  return (
    <div className="portfolio-container">
      <h2>Portfolio</h2>
      <div className="projects-grid">
        {projects.map((project) => {
          return (
            <div key={project.id} onClick={() => openModal(project)}>
              <div className="card-wrapper">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="card-image"
                />
                <div className="card-content">
                  <h3>{project.title}</h3>
                  <p>{project.description.substring(0, 100)}...</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <CardModal
        project={selectedProject}
        onClose={closeModal}
        showGame={showGame}
        setShowGame={setShowGame}
      />
    </div>
  );
};

export default Portfolio;
