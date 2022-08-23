import React from "react";
import "./pagetitle.css";

function PageTitle( {text}) {
    return (
                <div className="page-title">
                    <h3>{ text }</h3>
                </div>
            );
}

export default PageTitle;
