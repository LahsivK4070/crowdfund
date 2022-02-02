import React, { useState } from "react";
import MobileMenu from "./MobileMenu.jsx";
import hamburgerImg from "../images/icon-hamburger.svg";

function Nav() {

    let [menuDisp, setMenuDisp] = useState({ display: "none" });
    let [hamDisp, setHamDisp] = useState({ display: "block" });

    function showMenu() {
        setMenuDisp({ display: "block" });
        setHamDisp({ display: "none" });
    }
    function hideMenu() {
        setMenuDisp({ display: "none" });
        setHamDisp({ display: "block" });
    }

    return (<div className="navHead">
        <div className="nav-cont-1">
            <h1>crowdfund</h1>
            <div className="nav-menu-area">
                <img src={hamburgerImg} alt="ham-icon" onClick={showMenu} style={hamDisp}></img>
                <ul style={{display: "none"}}>
                    <li>About</li>
                    <li>Discover</li>
                    <li>Get Started</li>
                </ul>
            </div>
        </div>
        <MobileMenu onCross={hideMenu} dispProp={ menuDisp }/>
    </div>);
}

export default Nav;