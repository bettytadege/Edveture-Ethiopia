import React from "react";
import "./Contact.css";
import contactimage from "../../assets/contact us img.jpg";
function Contact() {
  return (
    <>
      <div className="fluid-container ">
        <div className="study text-light px-5 pt-4">
          <h1>Study Abroad free Assessment</h1>
          <p>Fill in your details below to get a personalised advice</p>
        </div>
        <div className="contact">
          <div className="row">
            <div className="image d-sm-none d-md-none d-lg-flex col-lg-6 ">
              <img src={contactimage} alt="" />
            </div>
            <div className="tabless col-lg-6  mt-5">
              <table>
                <tr>
                  <td>
                    <p className="">First Name *</p>
                    <input type="text" />
                  </td>
                  <td>
                    <p className="mx-5">Last Name *</p>
                    <input type="text" className="mx-5" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Email Address*</p>
                    <input type="email" />
                  </td>

                  <td>
                    <p className="mx-5">Mobile Numbering</p>
                    <input type="number" className="mx-5" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="mx-5">Study Destination</p>
                    <select name="" id="">
                      <option value="a"></option>
                      <option value="a"></option>
                    </select>
                  </td>
                  <td>
                    <p className="mx-5">When Do You Plan To Study?</p>
                    <select name="" id="" className="mx-5">
                      <option value="a"></option>
                      <option value="a"></option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="mx-5">Mode Of Counselling</p>
                    <select name="" id="" className="mx-2">
                      <option value="a"></option>
                      <option value="a"></option>
                    </select>
                  </td>
                  <td>
                    <p className="mx-5">Fund Your Education</p>
                    <select name="" id="" className="mx-5">
                      <option value="a"></option>
                      <option value="a"></option>
                    </select>
                  </td>
                </tr>
                <div className="select3">
                  <tr>
                    <td>
                      <p>Preferred Study Level</p>
                      <select name="" id="">
                        <option value="a"></option>
                        <option value="a"></option>
                      </select>
                    </td>
                  </tr>
                </div>
              </table>
              <div className="sec mt-5 pt-5">
                <p>
                  GC will not share your details with others without your
                  permission:
                </p>
                <table>
                  <tr>
                    <td>
                      <input type="checkbox" className="" />
                    </td>
                    <td>
                      <p> I agree to GC Terms and Privacy Policy</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" className="" />
                    </td>
                    <td>
                      <p>
                        Please contact me by phone, email or SMS to assist with
                        my enquiry
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" className="" />
                    </td>
                    <td>
                      <p>
                        I agree to GC Terms and Privacy Policy I agree to GC
                        Terms and Privacy Policy
                      </p>
                    </td>
                  </tr>
                </table>
              </div>
              <div className="btn mx-5">
                <button>Book Your Seat</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
