import React from "react";
import "../../assets/style/ContentSection.css";

function ContentSection(props) {
  return (
    <section className="content">
      <div className="content-block">
        <div className="text">
          <h4 className="title">{props.title}</h4>
          <p className="description">{props.information}</p>
        </div>
        <img
          src={props.imageSource}
          alt={props.description}
          className="content-image"
        />
      </div>
    </section>
  );
}

export default ContentSection;
