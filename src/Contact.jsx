import React, { useState } from "react";


const Contact =() =>{

  const[data, setData] = useState({
    fullname:'',
    phone:'',
    email:'',
    msg:''
  });
 
  const inputEvent =(event) =>{
    const {name, value} = event.target;
    setData((oldValue)=>{
      return {...oldValue, [name]:value};
    })
  }


  const formSubmit =(e)=>{
    e.preventDefault();
     alert(`My name is ${data.fullname}. My mobile no is ${data.phone} and my email is ${data.email} and all I want to say is ${data.msg}`)   
     setData({
      fullname:'',
      phone:'',
      email:'',
      msg:''
    });
  };
  return(
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>

      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
            <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">FullName</label>

  <input type="text" required={true} className="form-control" id="exampleFormControlInput1" 
  name="fullname" 
  value={data.fullname} 
  onChange={inputEvent} 
  placeholder="Enter Your FullName"
  />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>

  <input type="number" required={true} className="form-control" id="exampleFormControlInput1" 
  name="phone" 
  value={data.phone} 
  onChange={inputEvent} 
  placeholder="Enter Your Phone Number"/>
</div>

<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">E-mail</label>
  <input type="email" required={true} className="form-control" id="exampleFormControlInput1" 
  name="email" 
  value={data.email} 
  onChange={inputEvent} 
  placeholder="Enter Your E-mail"/>
</div>

<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea required={true} 
  name = "msg" 
  value = {data.msg} 
  onChange={inputEvent} 
  className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div className="col-12">
    <button className="btn btn-outline-primary" type="submit">Submit form</button>
  </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
