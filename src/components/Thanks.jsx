import React from "react";
import check from "../images/icon-check.svg";

function Thanks(props) {

    return (
        <div className="full-thanks" style={props.thxDis}>
            <div className="thanks">
                <img src={check} alt="check-img"></img>
                <h2>Thanks for your support!</h2>
                <p>
                    Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                    an email once our campaign is completed.
                </p>
                <button onClick={props.onThxClose}>Got it!</button>
            </div>
        </div>
    );
}

export default Thanks;