import React from "react";
import "./style.css";

function Skills() {
    return (
        <div className="container" style={{ height: "78vh" }}>
            <h4 id="skillsHeader" style={{ borderBottom: "solid" }}>Skills</h4>
            <div className="row">
                <div className="col s12">
                    <div className="card blue-grey darken-1 aboutCard">
                        <div className="card-content white-text">
                            <span className="card-title">Languages</span>
                            <p>HTML, CSS, Javascript, mySQL, MongoDB</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <div className="card blue-grey darken-1 aboutCard">
                        <div className="card-content white-text">
                            <span className="card-title">Applications</span>
                            <p>jQuery, Bootstrap, Node.js, React.js, Handlebars, Mongoose, Sequelize, Heroku</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;