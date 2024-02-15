import React from "react";
import "./Footer.css";
import logo from "../../assets/edventure.jpg";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="logo  container ">
          <img src={logo} alt="" />
        </div>
        <div className="col-7 text-light container px-4">
          <p>
            Edventure Ethiopia is a leading consultancy dedicated to aiding
            Ethiopian students in pursuing education abroad. Our expertise lies
            in offering personalized guidance, establishing connections with
            renowned universities, and navigating the complex application
            processes.
          </p>
        </div>
        <div className="list text-light container me-5 my-4">
          <ul className=" ">
            <li>Home .</li>
            <li>About Us .</li>
            <li>Service .</li>
            <li>Programs .</li>
            <li>Blog .</li>
            <FacebookRoundedIcon />
            <TwitterIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </ul>
        </div>
        <div className="footerlast text-light ">
          <div className="cpoyright">
            <p>Copyright © 2023 Edventure Ethiopia</p>
          </div>
          <div className="policy">
            <ul className="">
              <li>disclaimer</li>
              <li>Privacy policy</li>
              <li>Terms Of Use</li>
              <li>invester</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
