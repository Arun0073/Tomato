import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="content">
        <div className="content-daaya">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            laboriosam velit, libero, est nam voluptatem dolores neque
            voluptatum et minus distinctio recusandae mollitia nobis sunt quis
            quo obcaecati nemo enim.
          </p>
          <div className="social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="content-centre">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="content-baaya">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7880</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p>Copyright 2024 &copy; Tomato.com - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
