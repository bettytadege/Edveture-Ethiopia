import React from "react";
import Blogcomp from "../Component/Blogs/Blogcomp";
import img1 from "../assets/img4.jpg";
import img3 from "../assets/img7.jpg";
import img2 from "../assets/img5.jpg";
import "../Component/Blogs/Blogcomp.css";
function Blog() {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="new">
            <h1 className=""> News & Blogs</h1>
          </div>
          <div className="col-4">
            <Blogcomp img1={img1} />
          </div>
          <div className="col-4">
            <Blogcomp img1={img2} />
          </div>
          <div className="col-4">
            <Blogcomp img1={img3} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
