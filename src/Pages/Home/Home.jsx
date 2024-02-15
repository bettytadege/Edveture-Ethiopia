import React from "react";
import "./home.css";
import boy from "../../assets/cute boy.jpg";
function Home() {
  return (
    <>
      <div className="container  pt-5 ">
        <div className="home mx-3 mt-5   py-5 ">
          <div className="texts my-5 ">
            <p>
              <span className="Ignite">Ignite</span> your potential.
            </p>
            <p>Explore the world.</p>
          </div>
          <div className="paragraph">
            <p className="col-12  ">
              At Edventure Ethiopia, we're committed to being your ally in
              realizing your international academic ambitions. Trust us to guide
              you towards a world of endless possibilities!
            </p>
          </div>
          <div className="register">
            <button className="btn my-5 py-2">Register Now</button>
          </div>
        </div>
        <div className="boy">
          <img src={boy} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
