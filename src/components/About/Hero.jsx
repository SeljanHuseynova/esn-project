import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-indicators">
          {[...Array(5)].map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : ""}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active">
            <div className="carousel-content">
              <img
                src="https://www.esn.az/sites/default/files/styles/spotlight/public/news/images/untitled_design.png?itok=bMG8u4ON"
                className="carousel-image"
                alt="First Slide"
              />
              <div className="carousel-text">
                <p>
                  Youth Workers Exchange Program Between Azerbaijan and Georgia
                </p>
              </div>
            </div>
          </div>

          {/* Second Slide */}
          <div className="carousel-item">
            <div className="carousel-content">
              <img
                src="https://www.esn.az/sites/default/files/styles/spotlight/public/news/images/1600_900.jpg?itok=WeQg1oc8"
                className="carousel-image"
                alt="Second Slide"
              />
              <div className="carousel-text">
                <p>
                  Training and Resources for Universities to Strengthen
                  Transnational Partnerships (TRUST)
                </p>
              </div>
            </div>
          </div>

          {/* Third Slide */}
          <div className="carousel-item">
            <div className="carousel-content">
              <img
                src="https://www.esn.az/sites/default/files/styles/spotlight/public/news/images/isyop.jpg?itok=Y-WOiFM0"
                className="carousel-image"
                alt="Third Slide"
              />
              <div className="carousel-text">
                <p>INTERNATIONAL SUSTAINABLE YOUTH OUTREACH PROGRAM (ISYOP)</p>
              </div>
            </div>
          </div>

          {/* Fourth Slide */}
          <div className="carousel-item">
            <div className="carousel-content">
              <img
                src="https://www.esn.az/sites/default/files/styles/spotlight/public/news/images/rectangle_3.png?itok=bDiyHcNI"
                className="carousel-image"
                alt="Fourth Slide"
              />
              <div className="carousel-text">
                <p>The first ever edition of "Erasmus: A Complete Guide"</p>
              </div>
            </div>
          </div>

          {/* Fifth Slide */}
          <div className="carousel-item">
            <div className="carousel-content">
              <img
                src="https://www.esn.az/sites/default/files/styles/spotlight/public/news/spotlight/spotlight_image.png?itok=vmYfe3Of"
                className="carousel-image"
                alt="Fifth Slide"
              />
              <div className="carousel-text">
                <p>
                  ORIENTATION DAY FOR INTERNATIONAL STUDENTS FALL 2023 EDITION
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
