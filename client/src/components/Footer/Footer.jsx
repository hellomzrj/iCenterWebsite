import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col about-section">
          <div className="title">About</div>
          <div className="logo">iCenter</div>
          <div className="text">
            We are Apple Authorised Reseller and Service Provider in Bangladesh.
            Here you will get all Apple Official Products and Apple Official
            Services.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text shop-heading">iCenter - ( Retail Stores )</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">01678750350 - Dhanmondi</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">01678750354 - Jamuna Future Park</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">sales@icentre-bd.com</div>
          </div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text shop-heading">
              iService - ( Service Center )
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">01678750350 - Bashundhara R/A</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">01678750354 - Jamuna Future Park</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">asp@icentre-bd.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">MacBook</span>
          <span className="text">iPhone</span>
          <span className="text">iPad</span>
          <span className="text">iMac</span>
          <span className="text">Studio</span>
          <span className="text">AirPods</span>
          <span className="text">Watch</span>
          <span className="text">Accessories</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">Store</span>
          <span className="text">iService</span>
          <span className="text">Ultimaker</span>
          <span className="text">About</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">Powered by Satcom iCenter Limited</div>
          <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
