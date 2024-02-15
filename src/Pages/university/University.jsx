import React from "react";
import "./University.css";
import uni from "../../assets/university logos.jpg";
function University() {
  return (
    <>
      <div className="university container">
        <img src={uni} alt="" />
      </div>
    </>
  );
}

export default University;
