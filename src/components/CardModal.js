import React, { useEffect, useState } from "react";
import "../App.css"; // Assuming your styles are in App.css
import ToyWarsGame from "./ToyWars/ToyWarsGame";

const CardModal = ({ project, onClose, showGame, setShowGame }) => {
  const handleToyDealerClick = () => {
    if (window.confirm("Pssst, you looking for a good deal on some toys?")) {
      setShowGame(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".modal-content")) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        {showGame ? ( //Something isn't quite right here. Help me fix it!
          <ToyWarsGame />
        ) : (
          <div className="modal-body">
            <h2>
              {project.title} - {project.year}
            </h2>
            {project.id === 9 ? (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="card-image"
                onClick={handleToyDealerClick}
              />
            ) : (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="card-image"
              />
            )}

            <div className="text-content">
              <p>
                <strong>Description:</strong> {project.description}
              </p>
              <p>
                <strong>Inspiration:</strong> {project.inspiration}
              </p>
              <p>
                <strong>Technologies:</strong> {project.software}
              </p>
              <p>
                <strong>link:</strong> {project.link}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardModal;
