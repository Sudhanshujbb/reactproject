import React from "react";
import "./index.css";
import Home from "./Home";
import {Route, Routes, Navigate} from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import Menu from "./Menu";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";





const App =() =>{
  return(
    <>
      <Menu/>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/about" element={<About/>}/>
        <Route path = "/service" element={<Services/>}/>
        <Route path = "/contact" element={<Contact/>}/>
        <Route path="/*" element={<Navigate replace to="/" />}/>
      </Routes>
      <Footer/>
      
    </>
  );
}

export default App;
