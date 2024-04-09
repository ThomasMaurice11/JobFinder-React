
import { Link } from 'react-router-dom'

import axios from "axios";
import joi from "joi";
import React, { useState } from "react";
// import {useNavigate} from 'react-router-dom';




const ApplyForJob = () => {



    const [user, setuser] = useState({
        firstname: "",
        lastname: "",
        // password: "",
        email: "",
        //akml el ba2i lma at2kd mn el data eli el mafrood ttb3t
      });
    
      const [error, seterror] = useState("");
      const [isLoading, setisLoading] = useState(false);
      const [errorlist, seterrorlist] = useState([])
    //   let navigate= useNavigate();
      
      function getUserData(eventInfo /* el hwa t7t on change*/) {
        //akhod noskha el awl
        let myUser = { ...user };
        myUser[eventInfo.target.name] = eventInfo.target.value;
        setuser(myUser);
        console.log(myUser);
      }
      async function sendUserDataToApi() {
        let { data } = await axios.post(`/*baseurl+nameof api*/`, user);
        console.log(data);
        if (data.message == "success") {
            setisLoading(false);
            // navigate('/home');
            //el token msh byrg3 ghir mn el login
          //login|home
        } else {
          seterror(data.message);
          setisLoading(false);
    
        }
      }
      function submitRegisterForm(e) {
        setisLoading(true);
        e.preventDefault();
        let validation = validateRegisterForm();
        if(validation.error){
         setisLoading(false);
         seterrorlist(validation.error.details)
        }
        else
        {
            sendUserDataToApi();
        }
        validateRegisterForm();
      }
      function validateRegisterForm(){
        let schema =joi.object({
            firstname:joi.string().min(3).max(10).pattern(/^[A-Z]/).required(),
            lastname:joi.string().min(3).max(10).required(),
            email:joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            // password:joi.string().pattern(/^[A-Z][a-z]{3,6}/)
        });
       return schema.validate(user,{abortEarly:false});
    
      }
      //error.length wziftha tb3t el eeror w hwa bi3ml validate gwa submitRegistrationForm f ybyn el error
    return (  

       
     <>
          {errorlist.map((err,index)=> {
            if(err.context.label==='password'){
                return <div className="alert alert-danger my-2">password invalid</div>
            }
            else
            {
                return <div className="alert alert-danger my-2">{err.message}</div>
            }
          })}
        
              <div className="formbold-main-wrapper">
                        <div className="formbold-form-wrapper">
                            
                        {error.length>0?<div className="alert alert-danger my-2">{error}</div>:''}
                            <form onSubmit={submitRegisterForm}>
                                <div className="formbold-form-title">
                                    <h2 className="">Job Application</h2>
                                </div>
                                <div className="formbold-input-flex">
                                    <div>
                                        <label htmlFor="firstname" className="formbold-form-label">
                                            First name
                                        </label>
                                        <input
                                            onChange={getUserData}
                                            type="text"
                                            name="firstname"
                                            id="firstname"
                                            className="formbold-form-input"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastname" className="formbold-form-label">
                                            Last name
                                        </label>
                                        <input
                                            onChange={getUserData}
                                            type="text"
                                            name="lastname"
                                            id="lastname"
                                            className="formbold-form-input"
                                        />
                                    </div>
                                </div>
                                <div className="formbold-input-flex">
                                    <div>
                                        <label htmlFor="email" className="formbold-form-label">
                                            
                                            Email
                                        </label>
                                        <input
                                            onChange={getUserData}
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="formbold-form-input"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="formbold-form-label">
                                            
                                            Phone number
                                        </label>
                                        <input
                                            onChange={getUserData}
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            className="formbold-form-input"
                                        />
                                    </div>
                                </div>
                                <div className="formbold-mb-3">
                                    <label htmlFor="address" className="formbold-form-label">
                                        Street Address
                                    </label>
                                    <input
                                        onChange={getUserData}
                                        type="text"
                                        name="address"
                                        id="address"
                                        className="formbold-form-input"
                                    />
                                </div>
                                <div className="formbold-input-flex">
                                    <div>
                                        <label htmlFor="state" className="formbold-form-label">
                                            
                                            State
                                        </label>
                                        <input
                                            onChange={getUserData}
                                            type="text"
                                            name="state"
                                            id="state"
                                            className="formbold-form-input"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="country" className="formbold-form-label">
                                            
                                            Country
                                        </label>
                                        <input 
                                            onChange={getUserData}
                                            type="text"
                                            name="country"
                                            id="country"
                                            className="formbold-form-input"
                                        />
                                    </div>
        
                                </div>
                                <div className="formbold-mb-3">
                                    <label htmlFor="cv" className="formbold-form-label">
                                        Upload CV
                                    </label>
                                    <input
                                        onChange={getUserData}
                                        type="file"
                                        name="cv"
                                        id="cv"
                                        className="formbold-form-input"
                                    />
                                </div>
        
        
                                <button type="submit" className="formbold-btn m-5">
                                {isLoading==true? <i className="fas fa-spinner fa-spin"></i>:'Apply Now'}
                                </button>
                                
        
                            
                            </form>
                        </div>
                    </div>
                    <style
                        dangerouslySetInnerHTML={{
                            __html:
                                "\n  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  body {\n    font-family: 'Inter', sans-serif;\n  }\n  .formbold-mb-3 {\n    margin-bottom: 15px;\n  }\n  .formbold-relative {\n    position: relative;\n  }\n  .formbold-opacity-0 {\n    opacity: 0;\n  }\n  .formbold-stroke-current {\n    stroke: currentColor;\n  }\n  #supportCheckbox:checked ~ div span {\n    opacity: 1;\n  }\n\n  .formbold-main-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 48px;\n  }\n\n  .formbold-form-wrapper {\n    margin: 0 auto;\n    max-width: 570px;\n    width: 100%;\n    background: white;\n    padding: 40px;\n  }\n\n  .formbold-img {\n    margin-bottom: 45px;\n  }\n\n  .formbold-form-title {\n    margin-bottom: 30px;\n  }\n  .formbold-form-title h2 {\n    font-weight: 600;\n    font-size: 28px;\n    line-height: 34px;\n    color: #07074d;\n  }\n  .formbold-form-title p {\n    font-size: 16px;\n    line-height: 24px;\n    color: #536387;\n    margin-top: 12px;\n  }\n\n  .formbold-input-flex {\n    display: flex;\n    gap: 20px;\n    margin-bottom: 15px;\n  }\n  .formbold-input-flex > div {\n    width: 50%;\n  }\n  .formbold-form-input {\n    text-align: center;\n    width: 100%;\n    padding: 13px 22px;\n    border-radius: 5px;\n    border: 1px solid #dde3ec;\n    background: #ffffff;\n    font-weight: 500;\n    font-size: 16px;\n    color: #536387;\n    outline: none;\n    resize: none;\n  }\n  .formbold-form-input:focus {\n    border-color: #6a64f1;\n    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);\n  }\n  .formbold-form-label {\n    color: #536387;\n    font-size: 14px;\n    line-height: 24px;\n    display: block;\n    margin-bottom: 10px;\n  }\n\n  .formbold-checkbox-label {\n    display: flex;\n    cursor: pointer;\n    user-select: none;\n    font-size: 16px;\n    line-height: 24px;\n    color: #536387;\n  }\n  .formbold-checkbox-label a {\n    margin-left: 5px;\n    color: #6a64f1;\n  }\n  .formbold-input-checkbox {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border-width: 0;\n  }\n  .formbold-checkbox-inner {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 20px;\n    height: 20px;\n    margin-right: 16px;\n    margin-top: 2px;\n    border: 0.7px solid #dde3ec;\n    border-radius: 3px;\n  }\n\n  .formbold-btn {\n    font-size: 16px;\n    border-radius: 5px;\n    padding: 14px 25px;\n    border: none;\n    font-weight: 500;\n    background-color: #6a64f1;\n    color: white;\n    cursor: pointer;\n    margin-top: 25px;\n  }\n  .formbold-btn:hover {\n    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);\n  }\n"
                        }}
                    />
                
            </> 
        
        
    );
}
 
export default ApplyForJob;