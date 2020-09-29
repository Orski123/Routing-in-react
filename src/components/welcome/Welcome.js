import React from "react";
function Welcome (props) {
    return (
        <div className="Welcome ">
                <h1> Welcome, {props.match.params.orpadata}</h1>
        </div>
        
    )
    
}

export default Welcome;