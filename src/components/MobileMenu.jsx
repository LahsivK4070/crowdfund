import React from "react";
import closeMob from "../images/icon-close-menu.svg";

function MobileMenu(props) {

    return (
        <div className="full-mob-menu" style={props.dispProp}>
            <img src={closeMob} alt="close-mobile-menu" onClick={props.onCross}></img>
            <div className="mobile-menu">
                <ul>
                    <li>About</li>
                    <hr></hr>
                    <li>Discover</li>
                    <hr></hr>
                    <li>Get Started</li>
                </ul>
            </div>
        </div>
    );
}

export default MobileMenu;