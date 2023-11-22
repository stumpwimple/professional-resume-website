import React from "react";
import { useNavigate } from "react-router-dom";

const NameTag = () => {
  let navigate = useNavigate();

  return (
    <div style={nameTagStyle} onClick={() => navigate("/")}>
      <p style={{ ...nameTextStyle, ...firstNameStyle }}>BEN</p>
      <p style={nameTextStyle}>JONES</p>
    </div>
  );
};

const nameTagStyle = {
  backgroundColor: "white",
  color: "black",
  fontWeight: "bold",
  padding: "10px",
  marginLeft: "20px",
  paddingTop: "20px",
  cursor: "pointer",
  display: "inline-block",
  textAlign: "center",
};

const nameTextStyle = {
  margin: 0,
};

const firstNameStyle = {
  fontSize: "1.2em",
  letterSpacing: "5px",
};

export default NameTag;
