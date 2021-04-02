import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import Login from "./components/Login";
import Home from "./components/Home";
import Main from "./components/Main";
import Labor from "./components/Labor";
import Quote from "./components/Quote";
import Newbids from "./components/Newbids";
import Paint from "./components/Paint";
import Materials from "./components/Materials";
import Oldbids from "./components/Oldbids";
import "./index.css";
import "./components/CSS/theme.scss";


const App = () => {
  return(
      <div>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/main" component={Main} />
          <Route path="/labor" component={Labor} />
          <Route path="/Oldbids" component={Oldbids} />
          <Route path="/Newbids" component={Newbids} />
          <Route path="/Paint" component={Paint} />
          <Route path="/Materials" component={Materials} />
          <Route path="/Quote" component={Quote} />
        </Router>
      </div>
    )
}
export default App;
