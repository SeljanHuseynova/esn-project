import React from "react";
import img from '../../assets/images/Fleur-ESN.png';
import "../../assets/style/_footer.scss"
import Contact from "../../pages/Contact.jsx"

const Footer = () => {
  return   <footer>
  <div className="top">
    <div className="leftSection">
        <img
          src="./src/assets/logo/logo-main.png"
          alt="Logo of Erasmus student network"
          className="image"
        />
        <p className="paragraph">ESN Azerbaijan is a non-profit youth and student organisation working in the field of international education, student & youth mobility, and providing self-development opportunities for young individuals.</p>
    </div>
      <div className="right-section">
        <Contact />
      </div>
    
  </div>
  <div className="bottom">
    <div className="right">
      <img src={img} alt="logo-white" />
      <span>© All rights reserved - ESN Azerbaijan 2025</span>
    </div>
    <div className="left">
      <p>From Azerbaijan</p>
      <img
        src="https://s.w.org/images/core/emoji/13.0.0/svg/2764.svg"
        id="heart"
      />
    </div>
  </div>
</footer>;
};

export default Footer;
