import React from "react";
import { Link } from "react-router-dom";
import "./CSS/main.scss"


function Main() {
    return (
      <div>
        <div className="container">
          
          <h2>Add New Bid</h2>
          <div className="ph3">
            <Link to="/newbids"><span className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib dark-green"> Add Bid </span></Link>
          </div>
          
          <h3>Search existing Bids</h3>
          <div className="myUl">
            <ul >
              <li> Bid 1</li>
              <li> Bid 2</li>
              <li> Bid 3</li>
              <li> Bid 4</li>
              <li> Bid 5</li>
              <li> Bid 6</li>
              <li> Bid 7</li>
              <li> Bid 8</li>
              <li> Bid 9</li>
              <li> Bid 10</li>
              <li> Bid 11</li>
              <li> Bid 12</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

export default Main;
