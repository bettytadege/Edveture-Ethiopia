import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../Navigation/Navigation.css";
import logo from "../../assets/edventure.jpg";
import MenuIcon from "@mui/icons-material/Menu";
function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-md container  ">
        <div className="navbar-brand">
          <img src={logo} alt="" />
        </div>
        <div className=" links ">
          <ul className="navbar-nav d-md-flex">
            <li className="d-md-none">
              <a href="">
                <MenuIcon />
              </a>
            </li>
            <li className="d-none d-md-flex">
              <a href="">About Us</a>
            </li>
            <li className="d-none d-md-flex">
              <a href="">Program</a>
            </li>
            <li className="d-none d-md-flex">
              <a href="">Blog</a>
            </li>
            <li className="d-none d-md-flex">
              <a href="">Contact Us </a>
            </li>
            <li className="d-none d-md-flex">
              <a href="">Register</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
