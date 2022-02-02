import React, {useState} from "react";
import logo from "../images/logo-mastercraft.svg";

function Header(props) {

    let [isClicked, setClicked] = useState(false);
    let [bookText, setText] = useState("Bookmark");

    function handleClick() {
        setClicked((prevVal) => {
            return !prevVal;
        });

        setText((prevVal) => {
            if (prevVal === "Bookmark") {
                return "Bookmarked";
            }
            else {
                return "Bookmark";
            }
        })
    }



    return (
        <div className="header">
            <img className="logo" src={logo} alt="logo"></img>
            <h2>Mastercraft Bamboo Monitor Riser</h2>
            <p>A beautifully handcrafted monitor stand to reduce neck and eye strain.</p>
            <div className="headBtn">
                <button className="headBtn-1" onClick={props.onBack}>Back this project</button>
                <div className="headBtn-div">
                    <button className="headBtn-2"><svg className="book" width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle onClick={handleClick} style={isClicked ? { fill: "hsl(176, 72%, 28%)" } : { fill: "black" }} fill="#2F2F2F" cx="28" cy="28" r="28" /><path onClick={handleClick} style={isClicked ? { fill: "white" } : { fill: "#B1B1B1" }} fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" /></g></svg></button>
                    <div>
                        <p style={isClicked ? { color: "hsl(176, 72%, 28%)" } : { color: "hsl(0, 0%, 48%)" }}>{ bookText }</p>
                    </div>
                </div>    
            </div>
        </div>
    );
}

export default Header;