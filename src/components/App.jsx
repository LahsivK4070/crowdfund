import React, {useState} from "react";
import Nav from "./Nav.jsx";
import Header from "./Header.jsx";
import Data from "./Data.jsx";
import ProjectBack from "./ProjectBack.jsx";
import About from "./About.jsx";
import Thanks from "./Thanks.jsx";
import "../styles.css";

function App() {

    let [dispModal, setModalDisp] = useState({ display: "none" });
    let [isCheck, setCheck] = useState(false);
    let [dispThx, setThxDisp] = useState({ display: "none" });

    function showModal() {
        setModalDisp({ display: "block" });
        setCheck(false);
    }

    function hideModal() {
        setModalDisp({ display: "none" })
    }

    function showThx() {
        setThxDisp({ display: "block" });
        setModalDisp({ display: "none" });
        setCheck(true);
    }

    function hideThx() {
        setThxDisp({ display: "none" });
    }


    return <div className="container">
        <Nav />
        <ProjectBack onCloseMod={hideModal} modDisp={dispModal} onRadio={showThx} setCheck={ isCheck }/>
        <Header onBack={ showModal }/>
        <Thanks onThxClose={hideThx} thxDis={dispThx}/>
        <Data />
        <About modDisp={ showModal }/>
    </div>
}

export default App;