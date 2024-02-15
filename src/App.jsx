import { useState } from "react";
import Navigation from "./Component/Navigation/Navigation";
import Home from "./Pages/Home/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import About from "./Pages/Home/About/About";
import OurService from "./Pages/Home/OurService";
import Ourscholar from "./Pages/Ourscholar/Ourscholar";
import Contact from "./Pages/Contact us/Contact";
import Footer from "./Pages/Footer/Footer";
import Blog from "./Pages/Blog";
import Testimony from "./Pages/Testimoney/Testimony";
import Partner from "./Pages/Partner/Partner";
import University from "./Pages/university/University";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <About />
      <OurService />
      <Ourscholar />
      <Testimony />
      <Partner />
      <University />
      <Contact />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
