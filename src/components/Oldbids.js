import React from 'react';
import { Link } from "react-router-dom";

function Oldbids() {
    return (
        <div>
        <div className="container">

            <h1>Bid 1</h1>
            <div>
                <h4>Client Name      : <span>John Doe</span></h4>
                <h4>Client Address   : <span>123 Main St City, State 12345</span></h4>
                <h4>Date of Service  : <span>02/28/2021</span></h4>
                <h4>Quoted Price    : <span>$4,000.00</span></h4>
            </div>
 
            <h2>Edit details</h2>
            <select name="OldBids">
                <options value="Profile"><Link to="/newbids"> Profile</Link></options>
                <option value="PaintDetail"><Link to="/paint"> Paint Details</Link>s</option>
                <option value="Materials"><Link to="/materials"> Materials</Link></option>
                <option value="labor"><Link to="/labor"> Labor</Link></option>
                <option value="Quote"><Link to="/quote"> Quote</Link></option>
            </select>
 
            <div>
                 <button> <Link to="/main"> Finish</Link></button>
            </div>

        </div>
        </div>
    )
 }
 
 export default Oldbids;