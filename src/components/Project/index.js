import React from "react";
import "./style.css";

function Project(props) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.image} alt="project" />
                <span className="card-title" style={{backgroundColor:"#228B22"}}>{props.title}</span>
            </div>
            <div className="card-action">
                <a href={props.github}>Github Repo</a>
                <a href={props.deployed}>Deployed App</a>
            </div>
        </div>
    )
}

export default Project;