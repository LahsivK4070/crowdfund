import React from "react";
import Card from "./Card.jsx";
import Card2 from "./Card2.jsx";

function About(props) {
    return (
        <div className="about">
            <h2>About this project</h2>
            <p>
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
                to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
                your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
            </p>
            <p>
                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
                to allow notepads, pens, and USB sticks to be stored under the stand.
            </p>
            <Card
                dis1="none"
                dis="block"
                head="Bamboo Stand"
                ple="Pledge $25 or more"
                info="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
                you'll be added to a special Backer member list."
                left="101"
                showMod={props.modDisp}
            />
            <Card
                dis1="none"
                dis="block"
                head="Black Edition Stand"
                ple="Pledge $75 or more"
                info="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
                member list. Shipping is included."
                left="67"
                showMod={props.modDisp}
            />
            <Card2 dis="block" dis1="none" />
        </div>
    );
}

export default About;