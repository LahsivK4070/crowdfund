import React from "react";

function Card2(props) {
    return (
        <div className="card2">
            <div className="card2-top">
                <input type="radio" disabled style={{ display: props.dis1 }}></input>
                <div>
                    <p className="card2-head">Mahogany Special Edition</p>
                </div>
                <div>
                    <p className="card2-pledge">Pledge $200 or more</p>
                </div>
            </div>
            
            <p className="card2-detail">
                You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
                to our Backer member list. Shipping is included.
            </p>
            <div className="card2-bottom">
                <p className="qty2"><span>0</span> left</p>
                <button style={{display: props.dis}}>Out of Stock</button>
            </div>
        </div>
    );
}

export default Card2;