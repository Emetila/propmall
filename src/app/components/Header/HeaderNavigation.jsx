import React from "react";
import { Link } from "react-router-dom";

export const HeaderNavigation = (props) => {
    return (<nav>
            <ul className={props.className}>
                <li>
                    <Link className="active" to="/">Assets</Link>
                </li>
                <li>
                    <Link to="/ourstory" reloadDocument>Our Story</Link>
                </li>
                <li>
                    <Link to="#/resources">Resources</Link>
                </li>
                <li><Link to="#/support">Support</Link></li>
            </ul>
            </nav>
    )
}