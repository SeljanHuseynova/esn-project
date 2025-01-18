import React from "react";
import img from '../../assets/images/Fleur-ESN.png';

const Footer = () => {
  return   <footer>
  <div className="top">
    <div className="part">
      <h3>HEADING</h3>
      <span>something</span>
      <span>something</span>
      <span>something</span>
      <span>something</span>
    </div>
    <div className="part">
      <h3>HEADING</h3>
      <span>something</span>
      <span>something</span>
      <span>something</span>
      <span>something</span>
    </div>
    <div className="part">
      <h3>HEADING</h3>
      <span>something</span>
      <span>something</span>
      <span>something</span>
      <span>something</span>
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
