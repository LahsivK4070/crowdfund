import React from "react";

function Data() {
    return (
        <div className="data-block">
            <div className="data-b">    
                <div className="data-b-1">
                    <h2>$89,914</h2>
                    <p>of $100,000 backed</p>
                    <hr className="hr-1"></hr>
                </div>
                <div className="data-b-2">
                    <h2>5,007</h2>
                    <p>total backers</p>
                    <hr className="hr-1"></hr>
                </div>
                <div className="data-b-3">
                    <h2>56</h2>
                    <p>days left</p>
                </div>
            </div>
            <div className="prog-cont">
                <div className="prog-bar"></div>
            </div>
        </div>
    );
}

export default Data;