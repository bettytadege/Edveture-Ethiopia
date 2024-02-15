import React from "react";
import "./Ourscholar.css";
// import sun from "../../assets/photo_2024-02-11_14-28-44.jpg";
function Ourscholarcomp(props) {
  return (
    <>
      {/* <div className="mt-5"> */}
      <div className=" mt-5">
        <div className="card scholarcard">
          <img src={props.img1} className="card-img-top" alt="..." />
          <div className="card-body ms-4 mt-4">
            <h1 className="card-text">{props.num}</h1>
            <h6 className="text-danger fs-4">{props.title}</h6>
            <p>{props.parag}</p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Ourscholarcomp;
