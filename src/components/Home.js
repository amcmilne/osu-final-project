import React from "react";
import "../App.css";
import image from "../img/painttwo.png";
import Login from "./Login";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div class="container">
          <div>
            <h1 className="tc"> Paint Bid App</h1>
            <img className="myIMG w-20 " src={image} alt="logo" />
          </div>
          <br></br>
          <div className="container-fluid">
            <Login />
          </div>
        </div>
        <footer>
          <a
            href="https://www.iubenda.com/privacy-policy/47088602"
            class="iubenda-white iubenda-embed"
            title="Privacy Policy "
          >
            Privacy Policy
          </a>
        </footer>
      </div>
    );
  }
}

export default Home;
