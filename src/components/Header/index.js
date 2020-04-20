import React from "react";
import "./style.css";
import profilePic from "../../pages/Images/rsz_profilepic.png";
import linkedinImg from "../../pages/Images/linkedinreal.png";
import githubImg from "../../pages/Images/githubreal.png";

function Header() {
    return (
        <div className="jumbotron" id="headerbox">
            <img id="profilepic" src={profilePic} alt="profile" />
            <h4 id="name">Nicholas Seto</h4>
            <h5 id="title">Full-Stack Web Developer</h5>
            <img id="linkedin" src={linkedinImg} alt="linkedin" />
            <img id="github" src={githubImg} alt="github" />
        </div>
    )
}

export default Header;