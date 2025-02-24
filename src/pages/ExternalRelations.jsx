import React from "react";
import "../assets/style/ExternalRelations.css"

const ExternalRelations = () => {
  return (
    <div className="all-content">
      <div className="image-container">
        <img
          src="https://www.esn.az/sites/default/files/styles/partner_page/public/partners/images/academstar.png?itok=6yYrz-ci"
          alt="Sample"
          className="image"
        />
      </div>
      <div className="text-container">
        <h1>Dynamic and Responsive Layout</h1>
        <p>
        AcademStar is dedicated to providing high-quality educational services tailored to meet the needs of various age groups and proficiency levels. Our center offers high quality classes for internationally recognized exams, including IELTS, GMAT, GRE, and DUOLINGO. Our goal is to support both the academic and professional development of our students, helping them achieve their educational and career aspirations.</p>
        <h3>
        Exclusive Discounts for ESNcard holders</h3>
        <p>
        As a proud partner of ESN Azerbaijan, AcademStar offers a 20% discount on all services and products to ESNcard holders. Simply present your ESNcard or Membership card to take advantage of this exclusive offer.
        </p>
      </div>
    </div>
  );
};

export default ExternalRelations;
