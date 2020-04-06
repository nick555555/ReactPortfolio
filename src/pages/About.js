import React from "react";
import profilePic from "./Images/rsz_profilepic.png";

function About() {
    return (
        <div className="container" style={{height:"78vh"}}>
            <h3 style={{borderBottom:"solid"}}>About Me</h3>
            <img className="float-left" id="profilepic" src={profilePic} alt="profile" />
            <p>Hello! I am Nicholas Seto. I am a recently graduated student of McGill University and am currently studying full stack web development at the University of Washington.  I hope to one day become of master of web development and create phenominal user experiences.</p>
            <p>Though I have only taken my first few steps along the web developer's journey I intend to develop my skills into an invaluable asset for clients.  I can take a few website parameters and turn it into a flashy, functional and bug free experience that conveys desired information to users in a sleek and memorable way. This is to ensure clients reap the maximum benefits from their web presence.</p>
            <p>Growing up in Seattle has given me a passion for the outdoors. Whether hiking, camping, kayaking or skiing I love spending time in nature.  I am constantly trotting new pathways and searching for new adventures.  The gorgeous greenery and mountains of the Pacific Northwest succeeds to inspire me in my everyday life.</p>
        </div>
    )
}

export default About;