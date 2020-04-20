import React from "react";

function Resume() {
    return (
        <div className="container" style={{height:"78vh"}}>
            <h3 style={{borderBottom:"solid"}}>Resume</h3>
            <div className="row">
                <a href="https://docs.google.com/document/d/1ekdrHDxmg8wHa09uTPwe57TsrbJzWXor1hxq30QJN2w/edit?usp=sharing"><h5 style={{textAlign:"center"}}>Nicholas Seto's Resume</h5></a>
            </div>
            <iframe width="100%" height="100%" src="https://docs.google.com/document/d/e/2PACX-1vRKldj6pDtI1KsBoLrz6VvKBrM0-gpLNJLRVlGiLiRAhUffyz808ErDUssnmDcccWeC8eBxJ2RPh7EN/pub?embedded=true"></iframe>
        </div>
    )
}

export default Resume;