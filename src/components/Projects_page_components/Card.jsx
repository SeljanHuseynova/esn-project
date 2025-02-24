import React from "react";
import "../../assets/style/Card.css";
import { Link } from "react-router-dom"; 

function Card(props) {
  return (
    <div className="card">
      <div className="image-container">
        <img src={props.image} alt="picture" className="card-image" />
        <div className="label">{props.label}</div>
      </div>
      <div className="card-content">
        <h1 className="card-title">{props.title}</h1>
        <p className="card-description">{props.description}</p>
        <a href={props.link} className="card-link">
          Read More
        </a>
      </div>
      <div className="card-footer">{props.date}</div>
    </div>
  );
}

export default Card;
