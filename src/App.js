import React from "react";
import { BrowserRouter as Router, Route  } from "react-router-dom"; 
import PrivateRoute from './components/PrivateRoute';
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
          <PrivateRoute path="/main" component={Main} />
          <PrivateRoute path="/labor" component={Labor} />
          <PrivateRoute path="/Oldbids" component={Oldbids} />
          <PrivateRoute path="/Newbids" component={Newbids} />
          <PrivateRoute path="/Paint" component={Paint} />
          <PrivateRoute path="/Materials" component={Materials} />
          <PrivateRoute path="/Quote" component={Quote} />
        </Router>
      </div>
    )
}
export default App;
