import React from "react";

function Contact() {
    return (
        <div className="container" style={{height:"78vh"}}>
            <h3 style={{borderBottom:"solid"}}>Contact</h3>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="name" type="text" className="validate" />
                            <label for="name">Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" />
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="message" type="text" className="validate" />
                            <label for="message">Message</label>
                        </div>
                    </div>
                    <div className="row">
                        <input type="button" value="Submit" style={{ border: 0, color: "white", backgroundColor: "green", height: 40, width: 80 }}></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;