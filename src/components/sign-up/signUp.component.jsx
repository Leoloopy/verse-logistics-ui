import { Fragment } from "react";
import "./signUp.style.css";
import verse from "../../assets/verse-white-logo.png";
import Footer from "../footer/footer.component";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const SignUp = () => {

  const navigate = useNavigate();
  
  const [userData, setUserData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    phoneNumber:"",
    city:"",
    country:"",
    street:"",
    state:"",
  })

  const handleChange = (event) => {
      const {name , value} = event.target;
      setUserData(prevValue =>{
        return {
          ...prevValue, 
          [name]:value
        }
      })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { 
      "firstName": userData.firstName,
      "lastName":userData.lastName,
      "email":userData.email,  
      "password":userData.password,
      "phoneNumber":userData.phoneNumber,
      "address": {
        "city":userData.city,
        "country": userData.country,
        "street": userData.street,
        "state": userData.state
      },
    };
    
    console.log(user)
    fetch("http://localhost:8080/users/senders/register-user", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
      navigate("/home")
  }

    return (
      <Fragment>
        <div className="sign-up-page-structure">
          <div className="sign-up-container">
            <div className="logo-background">
              <img src={verse} alt="verse-logo" />
            </div>
            <div className="form-section">
              <p>Create Account</p>

              <form>
                <section>
                  <div>
                    <label htmlFor="firstname">
                      <span>First Name:</span>
                      <input required type="text" id="Fname" name="firstName" value={userData.firstName} onChange={handleChange}/>
                    </label>
                  </div>

                  <div>
                    <label htmlFor="lastName">
                      <span>Last Name:</span>
                      <input required type="text" id="Lname" name="lastName" value={userData.lastName} onChange={handleChange} />
                    </label>
                  </div>

                  <div>
                    <label htmlFor="email">
                      <span>Email:</span>
                      <input required type="email" id="mail" name="email" value={userData.email} onChange={handleChange}/>
                    </label>
                  </div>

                  <div>
                    <label htmlFor="password">
                      <span>Password:</span>
                      <input required title="Enter at least more than four lettets" type="password" id="password" name="password" pattern="[0-9a-fA-F]{4,8}"
                      value={userData.password} onChange={handleChange} />
                    </label>
                  </div>

                  <div>
                    <label htmlFor="phone Number">
                      <span>Phone Number:</span>
                      <input required type="number" id="phone" name="phoneNumber" value={userData.phoneNumber} onChange={handleChange}/>
                    </label>
                  </div>
                </section>

                <section>
                  <div>
                    <label htmlFor="city">
                      <span>City:</span>
                      <input required type="text" id="city" name="city" value={userData.city} onChange={handleChange} />
                    </label>
                  </div>

                  <div>
                    <label htmlFor="state">
                      <span>State:</span>
                      <input required type="text" id="state" name="state" value={userData.state} onChange={handleChange} />
                    </label>
                  </div>

                  <div>
                    <label htmlFor="street">
                      <span> Street:</span>
                      <input required type="street" id="street" name="street" value={userData.street} onChange={handleChange}/>
                    </label>
                  </div>

                  <div>
                    <label htmlFor="country">
                      <span>Country:</span>
                      <input required type="country" id="country" name="country" value={userData.country} onChange={handleChange}/>
                    </label>
                  </div>
                </section>
                <button className="form-submit" onClick={handleSubmit}>Submit</button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
}

export default SignUp;