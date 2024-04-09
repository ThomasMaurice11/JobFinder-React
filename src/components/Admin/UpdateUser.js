const UpdateUser = () => {
    return ( 
        <>
        <link rel='stylesheet' href='assets/AddNewUser/style.css'></link>
        <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <form action="https://formbold.com/s/FORM_ID" method="POST">
            <div className="formbold-input-group">
              <label htmlFor="name" className="formbold-form-label">
                {" "}
                UserName{" "}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Username"
                className="formbold-form-input"
              />
            </div>
            <div className="formbold-input-group">
              <label htmlFor="email" className="formbold-form-label">
                {" "}
                Password{" "}
              </label>
              <input
                type="email"
                name="lastname"
                id="email"
                placeholder="Password"
                className="formbold-form-input"
              />
            </div>
            <div className="formbold-input-group">
              <label htmlFor="age" className="formbold-form-label">
                {" "}
                Role{" "}
              </label>
              <input
                type="text"
                name="age"
                id="age"
                placeholder="Admin"
                className="formbold-form-input"
              />
            </div>
            <button className="formbold-btn">Update</button>
          </form>
        </div>
      </div>
      </>

     );
}
 
export default UpdateUser;
