import verse from "../../assets/verse.png"
import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./nav.styles.css";

const Header  = () => {
    return (
      <Fragment>
        <div className="header">
          <img src={verse} alt="verse-logo" className="verse-logo" />
          <Link to={"/home"}>
            <li>home</li>
          </Link>
          <Link to={"/nav/signup"}>
            <li>sign up</li>
          </Link>
          <Link to={"/nav/login"}>
            <li>log in</li>
          </Link>
        </div>
         <Outlet />
      </Fragment>
    );

}


export default Header;