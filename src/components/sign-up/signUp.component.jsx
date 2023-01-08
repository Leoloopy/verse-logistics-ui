import { Fragment } from "react";
import "./signUp.style.css";
import verse from "../../assets/verse-white-logo.png";
import Footer from "../footer/footer.component";
import { useState } from "react";



const SignUp = () => {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState({
    "city":"",
    "country":"",
    "street":"",
    "state":"",
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {firstName, lastName, email, password, phoneNumber, address }

    fetch("http://localhost/users/senders/register-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(() => {
      console.log("new blog added");
    });
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
              <form onSubmit={handleSubmit}>
                <section>
                  <div>
                    <label htmlFor="firstname">
                      <span>First Name:</span>
                      <input
                        required
                        type="text"
                        id="Fname"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </label>
                  </div>

                  <div>
                    <label htmlFor="lastName">
                      <span>Last Name:</span>
                      <input
                        required
                        type="text"
                        id="Lname"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </label>
                  </div>

                  <div>
                    <label htmlFor="email">
                      <span>Email:</span>
                      <input
                        required
                        type="email"
                        id="mail"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </label>
                  </div>

                  <div>
                    <label htmlFor="password">
                      <span>Password:</span>
                      <input
                        required
                        title="Enter at least more than four lettets"
                        type="password"
                        id="password"
                        name="password"
                        pattern="[0-9a-fA-F]{4,8}"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </label>
                  </div>

                  <div>
                    <label htmlFor="phone Number">
                      <span>Phone Number:</span>
                      <input
                      required
                        type="number"
                        id="phone"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </label>
                  </div>
                </section>

                <section>
                  <div>
                    <label htmlFor="city">
                      <span>City:</span>
                      <input
                      required
                        type="text"
                        id="city"
                        name="city"
                        value={address.city}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </label>
                  </div>

                  <div>
                    <label htmlFor="state">
                      <span>State:</span>
                      <input
                      required
                        type="text"
                        id="state"
                        name="state"
                        value={address.state}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </label>
                  </div>

                  <div>
                    <label htmlFor="street">
                      <span> Street:</span>
                      <input
                      required
                        type="street"
                        id="street"
                        name="street"
                        value={address.street}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </label>
                  </div>

                  <div>
                    <label htmlFor="country">
                      <span>Country:</span>
                      <input
                      required
                        type="country"
                        id="country"
                        name="country"
                        value={address.country}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </label>
                  </div>
                </section>
                <button className="form-submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
}

export default SignUp;