import React from "react";
import "./Blogcomp.css";

function Blogcomp(props) {
  return (
    <>
      {/* <div className="container "> */}
      {/* <div className="row"> */}
      <div className="card  blog  p-4">
        <img src={props.img1} className="card-img-top" alt="..." />
        <div className="card-body blogss">
          <p className="card-text ">Dec 03rd, 2022</p>
          <h1 className="col-12 fs-5">
            Controlled Substance Convictions & Education Laws
          </h1>
        </div>
        <div className="readmore mx-3 ">
          <p>Read More</p>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default Blogcomp;
