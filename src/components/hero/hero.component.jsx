import { Fragment } from "react"
import Header from "../nav/nav.component";
import "./hero.style.css"

const Hero = () => {
    return (
      <Fragment>
          <div className="hero-container">
            <Header />
            <div className="hero-description">
              <p className="company-name">VERSE LOGISTICS</p>
              <div className="welcome-message">
                <p>WELCOME TO THE <div>FUTURE OF SHIPPING</div></p>
              </div>
            </div>
          </div>
      </Fragment>
    );
}

export default Hero;