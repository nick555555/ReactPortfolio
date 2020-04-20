import React from "react";
import "./style.css";

function Project(props) {
    return (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={props.image} alt="project" />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{props.title}<i className="material-icons right">info</i></span>
                <a href={props.github}>Github Repo </a>
                <a href={props.deployed}> Deployed App</a>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{props.title}<i className="material-icons right">close</i></span>
                <p>{props.summary}</p>
                <p>Technologies: {props.tech}</p>
            </div>
        </div>
    )
}

export default Project;