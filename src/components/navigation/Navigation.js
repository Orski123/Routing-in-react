import React from "react";
//import Link from react-dom-router
import { Link } from "react-router-dom";

function Navigation(props) {
    return (
        <div className="Navigation">
            <ul>
                <li> <Link to="/">  Home</Link> </li>
                <li> <Link to="/clock"> Clock</Link></li>
                <li> <Link to="/contact"> Contact</Link></li>
<<<<<<< HEAD
                <li> <Link to="/jeopardy"> Jeopardy</Link></li>
=======
>>>>>>> 991ef9c3728202c75723b88fbffaa2ff2dd7357e
            </ul>
        </div>
    );
}
export default Navigation;