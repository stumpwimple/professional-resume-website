import React from "react";
// import headerImage from "./BenAtom.png";

const HomePage = () => {
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/images/BenAtom.png`}
        alt="Header"
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default HomePage;
