import React from "react";
import "../App.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div class="container">
          <div>
            <h1 className="tc"> Paint Bid App</h1>
            {/* <img className=" w-100 " src={companyLogo} alt="logo" /> */}
            {/* <Link to="/main">Go to Main</Link> */}
          </div>
          <div></div>
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
