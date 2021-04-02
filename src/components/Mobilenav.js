import React  from 'react';
import { Link } from "react-router-dom";

function Mobilenav (props) {
    return (
        <div>
            <div className="ph3 mb4">
                <Link to={props.back}><a className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib dark-green">Back</a></Link>
                <Link to={props.next}> <a className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib dark-green">{props.name}</a></Link>
            </div>
        </div>
    )
}
export default Mobilenav;