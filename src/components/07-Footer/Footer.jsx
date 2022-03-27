import React from "react";
import "./Footer.css";
import Fb from "../../img/icons/akar-icons_facebook-fill.svg";
import Tw from "../../img/icons/akar-icons_twitter-fill.svg";
import Ig from "../../img/icons/dashicons_instagram.svg";

export default function Footer() {
  return (
    <footer id="Contact">
      <div className="footerUP">
        <div className="footerTxt">
          <div className="logo-social">
            <div className="heroTxt">
              <h2>
                FUNNY <span className="TM">TM</span>
                <br />
                <span className="WATER">WATER</span>
              </h2>
              <div className="social">
                <img src={Fb} alt="" />
                <img src={Ig} alt="" />
                <img src={Tw} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="footerItems">
          <div className="contact">
            <h4>CONTACT US</h4>
            <p>
              <a href="/">(hi@funnywater.com)</a>
            </p>
          </div>
          <div className="email">
            <h4>
              DISTRIBUTION <br /> INQUIRIES:
            </h4>
            <p>
              <a href="/">(distributor@funnywater.com)</a>
            </p>
          </div>
          <div className="navigation">
            <h4>NAVIGATION</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#Merch">Shop</a>
              </li>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#BUYNOW">Where to Buy</a>
              </li>
              <li>
                <a href="#Merch">Merch</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="signup">
            <h4>EMAIL SIGN-UP</h4>
            <p>
              Subscribe for exclusive discounts, breathtaking memes and
              everything else Funny Water.
            </p>
            <input type="email" placeholder="Enter email address" />
            {/* TO DO */}
            {/* <p style={{ color: "red" }}>Please enter a valid email address</p>  */}
            <br />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="footerImg"></div>
    </footer>
  );
}
