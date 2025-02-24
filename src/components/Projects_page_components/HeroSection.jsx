import React from "react";
import "../../assets/style/HeroSection.css";

function HeroSection(props) {
  return (
    <section className="hero">
      <img className="first-image" src={props.imageAdress1} alt="Background image" />
      <div className="hero-content">
        <img
          src={props.imageAdress2}
          alt="Centered Image"
          className="centered-image"
        />
      </div>
    </section>
  );
}
export default HeroSection;
