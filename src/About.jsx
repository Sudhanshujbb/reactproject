import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/baby.jpg"
import Common from "./Common";


const About = () =>{

  return(
    <>
      <Common
        name ="Welcome to the About Page"
        imgsrc={web}
        visit ="/contact"
        btname="Contact Now"
      />
    </>
  );
}

export default About;

