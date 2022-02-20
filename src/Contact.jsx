import React from "react";
import { useState } from "react";

const Contact = ()=>{
      const [ Data , setData ] = useState({
          fullName:"",
          phone:"",
          email:"",
          msg:"",
      });

      const InputEvent = (event) => {
          const { name,value} = event.target;
          setData((preVal)=>{
              return {
                  ...preVal,
                  [name] : value,
              };
          });

      };

      const formSubmit =(e)=> {
        e.preventDefault();
        alert(
            `My name is ${Data.fullName},My Mobile Number is ${Data.phone} and email is ${Data.email} ,here what i want to say ${Data.msg}`
        );
      };
    
    return (
    <>  
        <div className="my-5">
            <h1 className="text-center">CONTACT US</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit} >
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">FullName</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" 
                            name="fullName"
                            value={Data.fullName}
                            onChange={InputEvent}

                            placeholder="enter your name"/>
                            </div>
                            <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">phone</label>
                            <input type="number" class="form-control" id="exampleFormControlInput1" 
                            name="phone"
                            value={Data.phone}
                            onChange={InputEvent}
                            placeholder="emter your number"/>
                            </div>
                            <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" 
                            name="email"
                            value={Data.email}
                            onChange={InputEvent}
                            placeholder="name@example.com"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" 
                                name="msg"
                                value={Data.msg}
                                onChange={InputEvent}></textarea>
                            </div>
                            <div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
      );
    };

        
 export default Contact;