import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <footer className="footer1 grid grid-cols-5 gap-28">
        <div>
          <ul className="acadamatetop">
            <li >
              <a className="acadamate" href="/">
                <img src="../../../public/acadamate.png" alt="" />
              </a>
            </li>
            <li>
              <a className="acadamate" href="/">Acadamate</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Navigation</li>
            <li>About</li>
            <li>Our Goals</li>
            <li>Vision</li>
          </ul>
        </div>
        <div className="w-48">
          {" "}
          {/* Increased width for Talent Solutions */}
          <ul>
            <li>Talent Solutions</li>
            <li>Marketing Solutions</li>
            <li>Sales Solutions</li>
            <li>Safety Center</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Community Guidelines</li>
            <li>Privacy & Terms</li>
            <li>Mobile view</li>
          </ul>
        </div>
        <div>
          <p>Language</p>
          <input type="text" placeholder="ENGLISH" />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
