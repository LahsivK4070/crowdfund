import React, {useState} from "react";
import Card from "./Card.jsx";
import Card2 from "./Card2.jsx";
import ModalCard from "./ModalCard.jsx";
import closeModal from "../images/icon-close-modal.svg";

function ProjectBack(props) {

    let [det1, setDet1] = useState({ display: "none" });
    let [det2, setDet2] = useState({ display: "none" });
    let [bord1, setBord1] = useState({ border: "2px solid hsl(0, 0%, 74%)" });
    let [bord2, setBord2] = useState({ border: "2px solid hsl(0, 0%, 74%)" });

    function showDet(e) {
        if (e.target.id === "2") {
            setDet1({ display: "block" });
            setBord1({ border: "2px solid hsl(176, 50%, 47%)" });
            setDet2({ display: "none" });
            setBord2({ border: "2px solid hsl(0, 0%, 74%)" });
        }
        if (e.target.id === "3") {
            setDet2({ display: "block" });
            setBord2({ border: "2px solid hsl(176, 50%, 47%)" });
            setDet1({ display: "none" });
            setBord1({ border: "2px solid hsl(0, 0%, 74%)" });
        }
    }

    function hideDet() {
        setDet1({ display: "none" });
        setBord2({border: "2px solid hsl(0, 0%, 74%)"});
        setDet2({ display: "none" });
        setBord1({border: "2px solid hsl(0, 0%, 74%)"});
    }

    return (
        <div className="full-modal" style={props.modDisp}>
            <div className="modal-pop">
                <div className="modal-head">
                    <h2>Back this project</h2>
                    <img src={closeModal} alt="cross-img" onClick={props.onCloseMod}></img>
                </div>
                <p className="modal-info">
                    Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
                </p>
                <ModalCard onRadio={props.onRadio} check={ props.setCheck }/>
                <Card
                    id="2"
                    dis1="block"
                    dis="none"
                    head="Bamboo Stand"
                    ple="Pledge $25 or more"
                    info="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                        you'll be added to a special Backer member list."
                    left="101"
                    minVal="25"
                    disDet={det1}
                    showDet={showDet}
                    hideDet={hideDet}
                    onRadio={props.onRadio}
                    check={props.setCheck}
                    bord={bord1}
                />
                <Card
                    id="3"
                    dis1="block"
                    dis="none"
                    head="Black Edition Stand"
                    ple="Pledge $75 or more"
                    info="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                        member list. Shipping is included."
                    left="64"
                    minVal="75"
                    disDet={det2}
                    showDet={showDet}
                    hideDet={hideDet}
                    onRadio={props.onRadio}
                    check={props.setCheck}
                    bord={bord2}
                />
                <Card2 dis="none" dis1="block"/>
            </div>
        </div>
    );
}

export default ProjectBack;