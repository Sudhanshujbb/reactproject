import React from "react";
import web from "../src/images/notepad.jpg";
import Card from "./Card";
import Sdata from "./Sdata";


const Services =() =>{
  return(
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="containe-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
            {Sdata.map((val)=>{ return <Card imgsrc={val.imgsrc} title = {val.title}/>})}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
