import React from "react";
import "../assets/style/Contact.css";
import {FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin} from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-container">    
      <div className="main-content">
        <div className="left-column">
          <div className="section">
            <h3><img src="./src/assets/images/Fleur-ESN.png" /> OUR SECTIONS</h3>
            <a href="/esn-ada-baku" className="section-link">
              ESN ADA Baku
            </a>
          </div>

          <div className="section">
            <h3>✉️ CONTACT</h3>
            <p>
              Email:{" "}
              <a href="mailto:info@esn.az" className="email-link">
                info@esn.az
              </a>
            </p>
          </div>

          <div className="section">
            <h3>FOLLOW ESN</h3>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/esnazerbaijan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="icon facebook" />
              </a>
              <a
                href="https://x.com/ESN_Azerbaijan?mx=2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="icon twitter" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCK9mcCrtbDgZZvqIXdlZ3uw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="icon youtube" />
              </a>
              <a
                href="https://www.instagram.com/esn_azerbaijan/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="icon instagram" />
              </a>
              <a
                href="https://www.linkedin.com/company/erasmus-student-network-azerbaijan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon linkedin" />
              </a>
            </div>
          </div>
        </div>

        <div className="right-column">
          <div className="section map-section">
            <h3><img src="https://www.svgrepo.com/show/59321/information-icon.svg" width="35px" /> ADDRESS</h3>
            <iframe
              title="ESN Address"
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.0646935486793!2d49.825669875731336!3d40.38525877144469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d7591da4d91%3A0xcf6e8c615346ad86!2sErasmus%20Student%20Network%20Azerbaijan!5e0!3m2!1sen!2saz!4v1740169057131!5m2!1sen!2saz"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
