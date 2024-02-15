import React from "react";
import "./About.css";
// import Card from "../../../Component/Navigation/aboutcomp/Card";
import gratuation from "../../../assets/photo_2024-02-11_14-28-26.jpg";
import humburger from "../../../assets/photo_2024-02-11_14-28-34.jpg";
import country from "../../../assets/photo_2024-02-11_14-29-00.jpg";
import friend from "../../../assets/friends.jpeg";
import Card from "../../../Component/aboutcomp/Card";
function About() {
  return (
    <>
      <div className="backgroundwrapper">
        <div className="container ">
          <div className="row mt-5 py-5 mx-5  mx-md-4">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <Card img={gratuation} text1="54+" text2="universities" />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <Card img={country} text1="40+" text2="Countries" />
            </div>
            <div className="col-sm-12 col-md ">
              <Card img={humburger} text1="25+" text2="Programs" />
            </div>
          </div>
        </div>
        {/* ******************************** */}
        <div className="empowerethiopia text-light container me-2">
          <h1 className="col-7">
            We Empower Ethiopian Youth To Achieve Their Dreams Through
            Personalized Support And Global Opportunities
          </h1>
        </div>
        <div className="container friendwrapper">
          <div className="friendimage mx-4 ">
            <img src={friend} alt="" />
          </div>
          <div className="paragarphtwo text-light mt-5 px-3 mx-5 pt-5 py-5">
            At Edventure Ethiopia, we understand the importance of accessing
            global educational opportunities. We specialize in guiding students
            towards international education and are committed to providing
            unparalleled support to ensure your success.
            <br /> <br />
            <p>
              {" "}
              Discover how partnering with us can empower you towards achieving
              your academic aspirations!
            </p>{" "}
            Edventure Ethiopia is a leading provider of international education
            services, dedicated to igniting potential, unlock-ing opportunities,
            and shaping brighter futures for Ethiopian students. With a deep
            understanding of the Ethiopian context, a proven track record of
            success, and a unwavering commitment to student success, Edventure
            Ethiopia has established itself as a trusted partner for Ethiopian
            youth seeking international education. opportunities.
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
