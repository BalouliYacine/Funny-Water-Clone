import React from "react";
import "./Footer.css";
import Fb from "../../img/icons/akar-icons_facebook-fill.svg";
import Tw from "../../img/icons/akar-icons_twitter-fill.svg";
import Ig from "../../img/icons/dashicons_instagram.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footerUP">
        <div className="footerTxt">
          <div className="logo-social">
            <div className="heroTxt">
              <h1>
                FUNNY <span className="TM">TM</span>
                <br />
                <span className="WATER">WATER</span>
              </h1>
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
              <a href="">(hi@funnywater.com)</a>
            </p>
          </div>
          <div className="email">
            <h4>
              DISTRIBUTION <br /> INQUIRIES:
            </h4>
            <p>
              <a href="">(distributor@funnywater.com)</a>
            </p>
          </div>
          <div className="navigation">
            <h4>NAVIGATION</h4>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Shop</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Where to Buy</a>
              </li>
              <li>
                <a href="">Merch</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="signup">
            <h4>EMAIL SIGN-UP</h4>
            <p>
              Subscribe for exclusive discounts, breathtaking memes and
              everything else Funny Water. Enter an email address
            </p>
            <input type="email" placeholder="Enter email address" />
            <br />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        {/* <div .>
          <h1>hi</h1>
        </div> */}
      </div>
      {/*  */}
      <div className="footerImg"></div>
    </footer>
  );
}
