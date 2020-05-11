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
            <div className="row">
                    <a href="https://www.linkedin.com/in/nicholas-seto-859647179/"><img id="linkedin" src={linkedinImg} alt="linkedin" /></a>
                    <a href="https://github.com/nick555555"><img id="github" src={githubImg} alt="github" /></a>
            </div>
        </div>
    )
}

export default Header;