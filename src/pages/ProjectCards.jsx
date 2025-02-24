import React, { useState } from "react";
import Card from ".././components/Projects_page_components/Card.jsx";
import "../assets/style/ProjectCards.css"
import { Route, Routes } from "react-router";


const ProjectCards = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <Card
          image="https://esn.az/sites/default/files/news/images/creartivity.jpg"
          label="Project"
          title="CreARTivity"
          description="The 5-day training program empowered young creatives in photography, videography, and filmmaking."
          link="/project1"
          date="04/02/2025"
        />
        <Card
          image="https://esn.az/sites/default/files/news/images/isyop.jpg"
          label="Project"
          title="ISYOP"
          description="The 3-day program aimed at raising awareness among local and international youth on climate change and environmental sustainability."
          link="/project2"
          date=" 30/01/2025"
        />
        <Card
          image="https://esn.az/sites/default/files/news/images/untitled_design.png"
          label="Project"
          title="Youth Workers Exchange Program"
          description="With the support of the Azerbaijan Youth Foundation, in partnership with ESN Georgia, ESN Azerbaijan organized an exchange program."
          link="/project3"
          date="28/04/2024"
        />

        {!showAll && (
          <div
            style={{
              width: "100%",
              textAlign: "center",
              margin: "20px 0",
              gridColumn: "1 / -1",
            }}
          >
            <button className="ShowMore" onClick={() => setShowAll(true)}>
              Show More
            </button>
          </div>
        )}

        {showAll && (
          <>
            <Card
              image="https://esn.az/sites/default/files/news/images/rectangle_3.png"
              label="Project"
              title="Erasmus: A Complete Guide"
              description="For many, studying abroad with the Erasmus+ programme is an adventure of a lifetime. Check out the E-Book now."
              link="/project4"
              date="20/11/2023"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectCards;
