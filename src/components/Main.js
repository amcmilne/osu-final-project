import React from "react";
import { Link } from "react-router-dom";

function Main() {
    return (
      <div>
        <div className="container">
          <h1>Main</h1>
          <div>
            <h2>Add New Bid</h2>
            <button>
              <Link to="/newbids"> Add Bid </Link>
            </button>
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
