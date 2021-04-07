import React from 'react';
// import { Link } from "react-router-dom";
 import Optionnav from './Optionnav';

function Oldbids(onChangeInput,Paths,defaultValue) {
    console.log(Paths)
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
                <Optionnav profile="/newbids" paint="/paint" materials="/materials" labor="/labor" quote="/quote" finish="/main"
                    onchagne={onChangeInput} defaultValue={defaultValue}/>
                    {/* <Link to={Paths.value}> {onChangeInput.label}</Link>  */}
            </div>
        </div>
    )
 }
 
 export default Oldbids;