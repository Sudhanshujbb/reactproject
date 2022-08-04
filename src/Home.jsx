import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/img.png"
import Common from "./Common";


const Home = () =>{

  return(
    <>
     <Common
      name ="Hire a Person with Usefull Skills"
        imgsrc={web}
        visit ="/service"
        btname="Get Started"
     />
    </>
  );
}

export default Home;

