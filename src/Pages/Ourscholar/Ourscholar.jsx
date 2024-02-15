import React from "react";
import Ourscholarcomp from "../../Component/ourscholar/Ourscholarcomp";
import imag2 from "../../assets/photo_2024-02-11_14-28-53.jpg";
import imag3 from "../../assets/photo_2024-02-11_14-28-18.jpg";
import sun from "../../assets/photo_2024-02-11_14-28-44.jpg";
function Ourscholar() {
  return (
    <>
      <div className="container programs">
        <h1>Scholarship Programs</h1>
      </div>
      <div className="container me-5  ">
        <div className="row ">
          <div className="col-md-12 col-lg-6 ">
            <Ourscholarcomp
              img1={sun}
              num="01"
              title="Fulbright program"
              parag="Provides scholarships for international students to study in the
                United States at various academic levels."
            />
          </div>
          <div className="col-md-12 col-lg-6">
            <Ourscholarcomp
              img1={imag3}
              num="02"
              title="Commonwealth Scholarships and Fellowships"
              parag="Offers scholarships for students from Commonwealth countries to study in other Commonwealth countries."
            />
          </div>{" "}
        </div>
      </div>
      <div className="container me-5">
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <Ourscholarcomp
              img1={imag2}
              num="03"
              title="Scholarships by Universities"
              parag="Many universities worldwide offer their own scholarships for international students. These can vary widely in terms of eligibility and coverage.."
            />
          </div>
          <div className="col-md-12 col-lg-6 orange">
            <Ourscholarcomp
              img1={sun}
              num="04"
              title="Fulbriht program"
              parag="Provides scholarships for international students to study in the
                United States at various academic levels."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Ourscholar;
