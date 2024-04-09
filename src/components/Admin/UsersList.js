import { Link } from "react-router-dom";
const UsersList = () => {
    return ( 
        <>

  <link rel='stylesheet' href='assets/Cart/style.css'></link>
  <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                            Users
                        </h1>
            
  <ul className="cards">
  <li>
    <a href="" className="card">
      <img
        src="https://t3.ftcdn.net/jpg/01/09/34/96/360_F_109349657_6BLNYxVVSBLQxwXjJ9n05OAuHVOZk8lh.jpg"
        className="card__image"
        alt=""
      />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="https://t3.ftcdn.net/jpg/01/09/34/96/360_F_109349657_6BLNYxVVSBLQxwXjJ9n05OAuHVOZk8lh.jpg">
            <path />
          </svg>
            {/* Add New User button at the bottom right */}
            <div className="w-100" style={{ display: 'flex', justifyContent: 'center' }}>
    <Link to="/AddNewUser" className="btn btn-primary">Add New User</Link>
</div>




          <div className="card__header-text">
            
    
          </div>
        </div>
       
      </div>
    </a>
  </li>
  <li>
    <a href="" className="card">
      <img
        src="https://i.imgur.com/2DhmtJ4.jpg"
        className="card__image"
        alt=""
      />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>
          <img
            className="card__thumb"
            src="https://i.imgur.com/sjLMNDM.png"
            alt=""
          />
          <div className="card__header-text">
            <h3 className="card__title">kim Cattrall</h3>
            <span className="card__status">3 hours ago</span>
          </div>
        </div>
        <p className="card__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          blanditiis?
        </p>
      </div>
    </a>
  </li>
  <li>
    <a href="" className="card">
      <img
        src="https://i.imgur.com/oYiTqum.jpg"
        className="card__image"
        alt=""
      />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>
          <img
            className="card__thumb"
            src="https://i.imgur.com/7D7I6dI.png"
            alt=""
          />
          <div className="card__header-text">
            <h3 className="card__title">Jessica Parker</h3>
            <span className="card__tagline">
              Lorem ipsum dolor sit amet consectetur
            </span>
            <span className="card__status">1 hour ago</span>
          </div>
        </div>
        <p className="card__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          blanditiis?
        </p>
      </div>
    </a>
  </li>
  <li>
    <a href="" className="card">
      <img
        src="https://i.imgur.com/2DhmtJ4.jpg"
        className="card__image"
        alt=""
      />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>
          <img
            className="card__thumb"
            src="https://i.imgur.com/sjLMNDM.png"
            alt=""
          />
          <div className="card__header-text">
            <h3 className="card__title">kim Cattrall</h3>
            <span className="card__status">3 hours ago</span>
          </div>
        </div>
        <p className="card__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          blanditiis?
        </p>
        <Link to="/cart" className="btn btn-danger align-center" style={{ textAlign: 'center', display: 'block', marginBottom: '10px' }}>
  Delete User
</Link>
<Link to="/UpdateUser" className="btn btn-primary align-center" style={{ textAlign: 'center', display: 'block', marginTop: '10px' }}>
  Update User
</Link>

  
      </div>
    </a>
  </li>
</ul></>
     );
}
 
export default UsersList;