import React from "react";
import "./ourservcomp.css";
import image1 from "../../assets/img1.jpg";

function Ourservcomp(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card service">
            <img src={props.image1} className="card-img-top" alt="..." />{" "}
            <div className="card-body text-light mt-3 par">
              <h1 className="fs-4">
                <span className="spans me-2 ">{props.span}</span>
                {props.parag1}
              </h1>
              <p className="">{props.parag2}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ourservcomp;
