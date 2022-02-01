import React from "react";

function ModalCard(props) {
    return (
        <div className="card-modal">
            <div>
                <input type="radio" name="select" id="1" onClick={props.onRadio}></input>
                <label>Pledge with no reward</label>
            </div>
            <p>
                Choose to support us without a reward if you simply believe in our project. As a backer, 
                you will be signed up to receive product updates via email.
            </p>
        </div>
    );
}

export default ModalCard;