import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={navStyle}>
      <Link className="navLink" to="/professional-resume-website/home">
        Home
      </Link>
      <Link className="navLink" to="/professional-resume-website/bio">
        Bio
      </Link>
      <Link className="navLink" to="/professional-resume-website/professional">
        Professional
      </Link>
      <Link className="navLink" to="/professional-resume-website/portfolio">
        Portfolio
      </Link>
      <Link className="navLink" to="/professional-resume-website/hobby">
        Hobby
      </Link>
      <Link className="navLink" to="/professional-resume-website/contact">
        Contact
      </Link>
    </nav>
  );
};

const navStyle = {
  top: 0,
  right: 0,
  padding: "10px",
  fontWeight: "bold",
  cursor: "pointer",
  display: "inline-block",
  textAlign: "center",
};

export default NavBar;
