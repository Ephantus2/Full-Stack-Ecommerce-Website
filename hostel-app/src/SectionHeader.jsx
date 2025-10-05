import React from "react";

function SectionHeader(props){
    return(
       <div className="section-header">
        <h2>{props.title}</h2>
        <h5>{props.subtitle}</h5>
       </div>
    )
}

export default SectionHeader;