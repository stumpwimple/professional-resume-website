import React, { useState } from "react";
import "./Hobby.css";
import ScrollingBanner from "./ScrollingBanner";
import {
  hobbiesData,
  videoGameImages,
  boardGameImages,
  TTRPGsImages,
  printingImages,
  bonsaiImages,
} from "./HobbyData";
import ImageFlipper from "./ImageFlipper";

const Hobby = () => {
  const [selectedHobby, setSelectedHobby] = useState(null);
  const [transitioningHobby, setTransitioningHobby] = useState(null);

  const handleHobbyClick = (hobbyTitle) => {
    setTransitioningHobby(hobbyTitle);
    setSelectedHobby(selectedHobby === hobbyTitle ? null : hobbyTitle);
  };

  const handleTransitionEnd = (hobbyTitle, event) => {
    if (
      event.propertyName === "clip-path" &&
      transitioningHobby === hobbyTitle
    ) {
      setTransitioningHobby(null);
    }
  };

  return (
    <div className="hobby-container">
      {hobbiesData.map((hobby, index) => (
        <div
          key={index}
          className={`hobby-slice ${
            selectedHobby === hobby.title ? "expanded" : ""
          }`}
          style={{
            zIndex:
              selectedHobby === hobby.title
                ? 2
                : transitioningHobby === hobby.title
                ? 1
                : 0,
          }}
          onClick={() => handleHobbyClick(hobby.title)}
          onTransitionEnd={(event) => handleTransitionEnd(hobby.title, event)}
          title={hobby.title.replace(/_/g, " ")}
        >
          <img
            src={process.env.PUBLIC_URL + hobby.iconSrc}
            alt={hobby.title.replace(/_/g, " ")}
            className="hobby-icon"
          />
          <span className="hobby-title">{hobby.title.replace(/_/g, " ")}</span>
          {selectedHobby === hobby.title && (
            <div className="hobby-description">
              {hobby.description.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          )}
        </div>
      ))}
      {selectedHobby === "Video_Games" && (
        <ScrollingBanner images={videoGameImages} />
      )}
      {selectedHobby === "Board_and_Card_Games" && (
        <ImageFlipper images={boardGameImages} source="board-and-card-games" />
      )}

      {selectedHobby === "TTRPGs" && (
        <ImageFlipper images={TTRPGsImages} source="ttrpgs" />
      )}

      {selectedHobby === "Bonsai" && (
        <ImageFlipper images={bonsaiImages} source="bonsai" />
      )}

      {selectedHobby === "3D_Printing" && (
        <ImageFlipper images={printingImages} source="printing" />
      )}
    </div>
  );
};

export default Hobby;
