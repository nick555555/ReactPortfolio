import React from "react";
import "./style.css";

function About() {
    return (
        <div className="container">
            <div className="row">
                <div className="col s8">
                    <div className="card blue-grey darken-1 aboutCard">
                        <div className="card-content white-text">
                            <span className="card-title">About</span>
                            <p>Full-Stack Web Developer searching for opportunities in the Pacific Northwest. I enjoy the challenge of 
                                creating snappy, accessible and quality end user experiences. Always looking to collaborate with others 
                                to gain new experiences and work toward professional growth</p><br />
                            <p>When not coding I enjoy a myriad of outdoor activities. Whether hiking, surfing or skiing I always yearn 
                                for the chance for some fresh air.</p>
                        </div>
                    </div>
                </div>
                <div className="col s4">
                    <div className="card blue-grey darken-1 aboutCard">
                        <div className="card-content white-text">
                            <span className="card-title">Contact Info</span>
                            <p>Email: <a href="nsnickseto@gmail.com">nsnickseto@gmail.com</a></p><br />
                            <p>Github: <a href="https://github.com/nick555555">nick555555</a></p><br />
                            <p>Linkedin: <a href="https://www.linkedin.com/in/nicholas-seto-859647179/">nicholas-seto-859647179</a></p><br />
                            <p>Phone: (206) 353-9828</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;