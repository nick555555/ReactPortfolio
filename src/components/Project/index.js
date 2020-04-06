import React from "react";
import "./style.css";

function Project(props) {
    return (
        <div className="card">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={props.image} alt="project" />
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">{props.title}<i class="material-icons right">info</i></span>
                <a href={props.github}>Github Repo </a>
                <a href={props.deployed}> Deployed App</a>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{props.title}<i class="material-icons right">close</i></span>
                <p>{props.summary}</p>
                <p>Technologies: {props.tech}</p>
            </div>
        </div>
    )
}

export default Project;