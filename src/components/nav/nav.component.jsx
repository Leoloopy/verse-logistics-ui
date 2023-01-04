import verse from "../../assets/verse.png"
import { Fragment } from "react";
import "./nav.styles.css";

const Header  = () => {
    return (
        <Fragment>
            <diV className="header">
               <img src={verse} alt="verse-logo" className="verse-logo" />
                <li>home</li>
                <li>sign up</li>
                <li>log in</li>
            </diV>
        </Fragment>
    )

}


export default Header;