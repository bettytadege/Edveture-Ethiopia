import React from "react";
import "./Partner.css";
import Testimonycomp from "../../Component/Testimony/Testimonycomp";
function Partner() {
  return (
    <>
      <div className="partner text-light pt-5   ">
        <div>
          <h1 className="mx-5 mt-5">Partners</h1>
        </div>

        <div className="container ">
          <div>
            <p>
              Edventure Ethiopia is a leading provider of international
              education services, dedicated to igniting potential, unlock-ing
              opportunities, and shaping brighter futures for Ethiopian
              students. With a deep understanding of the Ethiopian context, a
              proven track record of success, and a unwavering commitment to
              student success, Edventure Ethiopia has established itself as a
              trusted partner for Ethiopian youth seeking international
              education. opportunities.
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="col-sm-12 col-md-12 col-lg-4">
            <Testimonycomp />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4">
            <Testimonycomp />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4">
            <Testimonycomp />
          </div>
        </div>
      </div>
    </>
  );
}

export default Partner;
