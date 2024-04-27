// import { useSignup } from "./hooks/useSignup"
import { Link } from "react-router-dom/cjs/react-router-dom";
import React, { useEffect, useState } from 'react';
import { useParams,useHistory } from 'react-router-dom';
// import { useAuthContext } from './hooks/useAuthContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


const SignUp = () => {
  const navigate = useNavigate();
  const [UserName, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Role, setRole] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        await axios.post('http://localhost:5109/api/account/register' , {  // Use the correct endpoint '/api/job'
            UserName,
            Password,
            Email,
            Role
        });
        // Optionally, you can reset the form fields here
        setUsername('');
        setEmail('');
        setPassword('');
        setRole('');
        navigate('/');
        alert('User added successfully!');
        
        

    } catch (error) {
        console.error('Error adding user:', error);
        alert('Error adding user. Please try again later.');
    }
};
    return ( 
        <>
        <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>Sign Up Form by Colorlib</title>
  {/* Font Icon */}
  <link
    rel="stylesheet"
    href="assets/reg/fonts/material-icon/css/material-design-iconic-font.min.css"
  />
  {/* Main css */}
  <link rel="stylesheet" href="assets/reg/css/style.css" />
  <div className="main">
    {/* Sign up form */}
    <section className="signup">
      <div className="container">
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title">Sign up</h2>
            <form method="POST" className="register-form" onSubmit={handleSubmit} id="register-form">
              <div className="form-group">
                <label htmlFor="name">
                  <i className="zmdi zmdi-account material-icons-name" />
                </label>
                <input
                  type="text"
                  name="Username"
                  id="name"
                  onChange={(e) => setUsername(e.target.value)} 
                  value={UserName}
                  placeholder="Your Name"
                />
              </div>
             
           
              <div className="form-group">
                <label htmlFor="email">
                  <i className="zmdi zmdi-email" />
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)} 
                  value={Email}
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="pass">
                  <i className="zmdi zmdi-lock" />
                </label>
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  onChange={(e) => setPassword(e.target.value)} 
                  value={Password}
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="pass">
                  <i className="zmdi zmdi-lock" />
                </label>
                <input
                  type="Text"
                  name="Role"
                  id="pass"
                  onChange={(e) => setRole(e.target.value)} 
                  value={Role}
                  placeholder="Role"
                />
              </div>
              {/* <div className="form-group form-button">
              <button name="signup"  id="signup"  disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
      </div> */}
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit"
                  defaultValue="Register"
                />
              
              </div>
              
            </form>
          </div>
          <div className="signup-image">
            <figure>
              <img src="assets/reg/images/signup-image.jpg" alt="sing up image" />
            </figure>
            {/* <Link to='./' className="signup-image-link">
              I am already member
            </Link> */}
          </div>
        </div>
      </div>
    </section>
    </div>
    
        </>
     );
}
 
export default SignUp;
