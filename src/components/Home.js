import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import companyLogo from "../firstpaint.jpg";

class Home extends React.Component {
  insertGapiScript() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/platform.js";
    script.onload = () => {
      this.initializeGoogleSignin();
    };
    document.body.appendChild(script);
  }
  componentDidMount() {
    console.log("loading");

    this.insertGapiScript();
  }
  initializeGoogleSignin() {
    window.gapi.load("auth2", () => {
      window.gapi.auth2.init({
        client_id:
          "341203008031-9plv62cjqc2uj6qbg2aqmv8dk17amd0l.apps.googleusercontent.com",
      });
      console.log("API inited");

      window.gapi.load("signin2", () => {
        const params = {
          onsuccess: () => {
            console.log("user sign in complete");
          },
        };
        window.gapi.signin2.render("loginButton", params);
      });
    });
  }
  render() {
    return (
      <div>
        <div>
          <h1 className="tc"> Paint Bid App</h1>
          <img className=" w-100 " src={companyLogo} alt="logo" />
          <Link to="/main">Go to Main</Link>
        </div>
        <div>
          <div className="row">
            <div id="loginButton">Signin with Google</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
