import React from "react";
import "./card.css";

function Card(props) {
  return (
    <>
      <div className="container ">
        <div className="row ">
          <div className="card back col my-md-3 my-sm-3">
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body text">
              <p className="card-text text">{props.text1}</p>
              <h6>{props.text2}</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
