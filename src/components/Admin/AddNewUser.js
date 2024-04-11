import React, { useState } from 'react';
import axios from 'axios';

const AddNewUser = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        await axios.post('http://localhost:5109/api/user' , {  // Use the correct endpoint '/api/job'
            username,
            password,
            role
        });
        // Optionally, you can reset the form fields here
        setUsername('');
        setPassword('');
        setRole('');
        alert('User added successfully!');
    } catch (error) {
        console.error('Error adding user:', error);
        alert('Error adding user. Please try again later.');
    }
};

  return (
      <>
        <link rel='stylesheet' href='assets/AddNewUser/style.css'></link>
          <div className="formbold-main-wrapper">
              <div className="formbold-form-wrapper">
                  <form onSubmit={handleSubmit}>
                      <div className="formbold-input-group">
                          <label htmlFor="username" className="formbold-form-label">Username</label>
                          <input
                              type="text"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              placeholder="Username"
                              className="formbold-form-input"
                          />
                      </div>
                      <div className="formbold-input-group">
                          <label htmlFor="password" className="formbold-form-label">Password</label>
                          <input
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder="Password"
                              className="formbold-form-input"
                          />
                      </div>
                      <div className="formbold-input-group">
                          <label htmlFor="role" className="formbold-form-label">Role</label>
                          <input
                              type="text"
                              value={role}
                              onChange={(e) => setRole(e.target.value)}
                              placeholder="Role"
                              className="formbold-form-input"
                          />
                      </div>
                      <button type="submit" className="formbold-btn">Submit</button>
                  </form>
              </div>
          </div>
      </>
  );
};

export default AddNewUser;
