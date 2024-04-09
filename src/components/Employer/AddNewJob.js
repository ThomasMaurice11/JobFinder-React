import React from 'react';
const AddNewJob = () => {
    return (  
        <>

        <link rel='stylesheet' href='assets/AddNewJob/style.css'></link>
        <div className="formbold-main-wrapper">
  <div className="formbold-form-wrapper">
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div className="formbold-input-group">
        <label htmlFor="name" className="formbold-form-label">
          {" "}
          Job Title{" "}
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="FullStack Developer"
          className="formbold-form-input"
        />
      </div>
      <div className="formbold-input-group">
        <label htmlFor="email" className="formbold-form-label">
          {" "}
          Job Type{" "}
        </label>
        <input
          type="email"
          name="lastname"
          id="email"
          placeholder="Full-Time"
          className="formbold-form-input"
        />
      </div>
      <div className="formbold-input-group">
        <label htmlFor="age" className="formbold-form-label">
          {" "}
          Job Budget{" "}
        </label>
        <input
          type="text"
          name="age"
          id="age"
          placeholder="8000-12000"
          className="formbold-form-input"
        />
      </div>
      <div className="formbold-input-group">
        <label htmlFor="age" className="formbold-form-label">
          {" "}
          Job Description{" "}
        </label>
        <input
          type="text"
          name="age"
          id="age"
          placeholder="we are hiring a FullStack Developer with high level skills"
          className="formbold-form-input"
        />
      </div>
      <button className="formbold-btn">Submit</button>
    </form>
  </div>
</div>
</>
    );
}
 
export default AddNewJob;
