import React from "react";

function Card(props) {

    return (
        <div className="card" style={props.bord}>
            <div className="card1-top">
                <input type="radio" style={{display: props.dis1}} name="select" id={props.id} onClick={props.showDet}></input>
                <div className="c1t-1">
                    <p className="card-head">{ props.head }</p>
                </div>
                <div className="c1t-2">
                    <p className="card-pledge">{ props.ple }</p>
                </div>
            </div>
            <p className="card-detail">{props.info}</p>
            <div className="card1-bottom">
                <p className="qty"><span>{ props.left }</span> left</p>
                <button style={{ display: props.dis }} onClick={props.showMod}>Select Reward</button>
            </div>
            <div className="card-price" style={props.disDet}>
                <p>Enter your pledge</p>
                <div className="card-price-sel">
                    <div>
                        <label>$</label>
                        <input type="number" placeholder={props.minVal} min={props.minVal}></input>
                    </div>
                    <button onClick={() => { props.onRadio(); props.hideDet(); }} >Continue</button>
                </div>
            </div>
        </div>
    );
}

export default Card;