import React from "react";
import "./Ourservice.css";
import Ourservcomp from "../../Component/Our service/Ourservcomp";
import image1 from "../../assets/img1.jpg";
import visa from "../../assets/visa.jpg";
import image2 from "../../assets/img2.jpg";
function OurService() {
  return (
    <>
      <div className="ourservice">
        <div className="container pt-5">
          <h1 className="text-light serviceh1">Our Service</h1>
        </div>
        <div className="container">
          <div className="row mt-5 mx-5">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <Ourservcomp
                span="01"
                image1={image1}
                parag1=" Free Registration  & Consultancy Service"
                parag2=" We offer a free registration and consultancy service to all
              students."
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <Ourservcomp
                span="02"
                image1={image2}
                parag1=" Assistance with Application Process "
                parag2="We assist students in navigating the complexities of the application process for universities abroad. "
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <Ourservcomp
                span="03"
                image1={visa}
                parag1=" Visa Processing & Logistical Support"
                parag2="We help students with visa processing and other logistical arrangements required for studying abroad. "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurService;
