import React from "react";
import "./Testimonycomp.css";
import test from "../../assets/testimony.jpg";
function Testimonycomp() {
  return (
    <>
      {/* <div className=" container col-6">
        <div className="card testimony mt-5">
          <img src={test} className="card-img-top" alt="..." />
          <div className="card-body testtext">
            <p>
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <h6 className="text-danger">Yonzzone Bst </h6>
            <p>West Beach Bathers Pavilion</p>
          </div>
        </div>
      </div> */}
      <div className="container  ">
        <div className="test my-md-3">
          <div className="img">
            <img src={test} alt="" />
          </div>
          <div className="para px-4">
            <p>
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
          </div>
          <div className="name px-4">
            <h6 className="text-danger">Yonzzone Bst </h6>
            <p>West Beach Bathers Pavilion</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonycomp;
