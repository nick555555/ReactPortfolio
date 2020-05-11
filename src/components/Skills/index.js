import React from "react";
import "./style.css";
import HTMLImg from "../../pages/Images/html5.png";
import CSSImg from "../../pages/Images/css3.png";
import JSImg from "../../pages/Images/javascript.png";
import SQLImg from "../../pages/Images/mysql.png";
import mongoImg from "../../pages/Images/mongo.png";
import jqueryImg from "../../pages/Images/jquery.png";
import bootstrapImg from "../../pages/Images/bootstrap.png";
import nodeImg from "../../pages/Images/nodejs.png";
import reactImg from "../../pages/Images/react.png";
import handlebarsImg from "../../pages/Images/handlebars.png";
import mongooseImg from "../../pages/Images/mongoose.png";
import sequelizeImg from "../../pages/Images/sequelizer.png";
import herokuImg from "../../pages/Images/heroku.png";

function Skills() {
    return (
        <div className="container" style={{ height: "78vh" }}>
            <h4 id="skillsHeader" style={{ borderBottom: "solid" }}>Skills</h4>
            <div className="row">
                <div className="col s12">
                    <div className="card blue-grey darken-1 aboutCard">
                        <div className="card-content white-text">
                            <span className="card-title">Languages</span>
                            <div style={{ marginTop: "27px" }} className="row">
                                <div className="col s2 offset-s1">
                                    <img className="skillsPic" id="htmlPic" src={HTMLImg} alt="html" />
                                    <p style={{ marginLeft: "27px" }}>HTML5</p>
                                </div>
                                <div className="col s2">
                                    <img className="skillsPic" id="cssPic" src={CSSImg} alt="css" />
                                    <p style={{ marginLeft: "30px" }}>CSS3</p>
                                </div>
                                <div className="col s2">
                                    <img className="skillsPic" id="jsPic" src={JSImg} alt="js" />
                                    <p style={{ marginLeft: "20px" }}>Javascript</p>
                                </div>
                                <div className="col s2">
                                    <img className="skillsPic" id="sqlPic" src={SQLImg} alt="sql" />
                                    <p style={{ marginLeft: "27px" }}>MySQL</p>
                                </div>
                                <div className="col s2">
                                    <img className="skillsPic" id="mongoPic" src={mongoImg} alt="mongo" />
                                    <p style={{ marginLeft: "24px" }}>MongoDB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <div className="card blue-grey darken-1 aboutCard" style={{ height: "410px" }}>
                        <div className="card-content white-text">
                            <span className="card-title">Applications</span>
                            <div style={{ marginTop: "27px" }} className="row">
                                <div className="col s2 offset-s1">
                                    <img className="skillsPic" id="jqueryPic" src={jqueryImg} alt="JQuery" />
                                    <p style={{ marginLeft: "27px" }}>JQuery</p>
                                </div>
                                <div className="col s2">
                                    <img className="skillsPic" id="bootstrapPic" src={bootstrapImg} alt="BootStrap" />
                                    <p style={{ marginLeft: "30px" }}>Bootstrap</p>
                                </div>
                                <div className="col s2">
                                    <img className="skillsPic" id="nodePic" src={nodeImg} alt="node" />
                                    <p style={{ marginLeft: "20px" }}>Node.js</p>
                                </div>
                                <div className="col s2">
                                    <img className="skillsPic" id="reactPic" src={reactImg} alt="react" />
                                    <p style={{ marginLeft: "27px" }}>React.js</p>
                                </div>
                                <div className="col s2">
                                    <img className="skillsPic" id="handlebarsPic" src={handlebarsImg} alt="handlebars" />
                                    <p style={{ marginLeft: "24px" }}>Handlebars</p>
                                </div>
                            </div>
                            <div style={{ marginTop: "27px" }} className="row">
                                <div className="col s2 offset-s3">
                                    <img className="skillsPic" id="mongoosePic" src={mongooseImg} alt="Mongoose" />
                                    <p style={{ marginLeft: "27px" }}>Mongoose</p>
                                </div>
                                <div className="col s2">
                                    <img className="skillsPic" id="sequelizePic" src={sequelizeImg} alt="Sequelize" />
                                    <p style={{ marginLeft: "30px" }}>Sequelize</p>
                                </div>
                                <div className="col s2">
                                    <img className="skillsPic" id="herokuPic" src={herokuImg} alt="Heroku" />
                                    <p style={{ marginLeft: "20px" }}>Heroku</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;