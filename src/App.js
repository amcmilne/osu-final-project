import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Main from "./components/Main";
import Labor from "./components/Labor";
import Quote from "./components/Quote";
import Newbids from "./components/Newbids";
import Paint from "./components/Paint";
import Materials from "./components/Materials";
import Oldbids from "./components/Oldbids";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSignedIn: null,
    };
  }

  initializeGoogleSignin() {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          client_id:
            "341203008031-9plv62cjqc2uj6qbg2aqmv8dk17amd0l.apps.googleusercontent.com",
        })
        .then(() => {
          const isSignedIn = window.gapi.auth2
            .getAuthInstance()
            .isSignedIn.get();
          this.setState({ isSignedIn });
        });
    });
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/platform.js";
    script.onload = () => {
      this.initializeGoogleSignin();
    };
    document.body.appendChild(script);
  }

  ifUserSignedIn(Component) {
    if (this.state.isSignedIn === null) {
      return <h1>checking to see if you are signed in...</h1>
    }
    return this.state.isSignedIn ? <Component /> : <Login />;
  }
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/main" render={() => this.ifUserSignedIn(Main)} />
          <Route path="/labor" component={Labor} />
          <Route path="/Oldbids" component={Oldbids} />
          <Route path="/Newbids" component={Newbids} />
          <Route path="/Paint" component={Paint} />
          <Route path="/Materials" component={Materials} />
          <Route path="/Quote" component={Quote} />
        </Router>
      </div>
    );
  }
}
/* eslint-disable no-redeclare */
/* 
Open a database.
Create an object store in the database. 
Start a transaction and make a request to do some database operation, like adding or retrieving data.
Wait for the operation to complete by listening to the right kind of DOM event.
Do something with the results (which can be found on the request object).
*/

const clientData = [{ email: "johnsmith@email.com", name: "John" }];

let db;

//create new DB request for "bid"//
const request = indexedDB.open("bid", 1); //only use round numbers for version

// check for other instances loaded with the database
request.onblocked = function (event) {
  console.log("Please close all other tabs with this site running");
};

request.onerror = function (event) {
  console.log("Whoops!" + event.target.errorCode);
};

request.onsuccess = function (event) {
  db = event.target.result;
  loadDatabase(db);
  return;
};

//set up database
request.onupgradeneeded = function (event) {
  const db = event.target.result;

  //objectStore to hold customer info by email (unique)
  var objectStore = db.createObjectStore("client", {
    keyPath: "email",
    autoIncrement: true,
  });

  //create an index to search clients by email(unique)
  objectStore.createIndex("email", "email", { unique: true });
  objectStore.transaction.oncomplete = function (event) {
    var clientObjStore = db
      .transaction("client", "readwrite")
      .objectStore("client");
    clientData.forEach(function (client) {
      clientObjStore.add(client);
    });
  };
  loadDatabase(db);
};

// allows new page to update database by closing other instance of database
function loadDatabase(db) {
  db.onversionchange = function (event) {
    db.close();
    console.log("Please reload or close this tab to load the new version");
  };
  //addClient();
}

// // //ADDING DATA//
// function addClient() {
//   var newClient = [{ email: "", name: "" }];
//   var transaction = db.transaction(["client"], "readwrite");

//   transaction.oncomplete = function (event) {
//     console.log("complete!");
//   };

//   transaction.onerror = function (event) {
//     console.log("Whoops!" + event.target.errorCode);
//   };

//   var objectStore = transaction.objectStore("client");
//   // clientData.forEach(function (client) {
//   var objStoreRequest = objectStore.add(newClient[0]);
//   objStoreRequest.onsuccess = function (event) {};
// }

// //RETRIEVE DATA//

// var transaction = db.transaction(["clients"]);
// var objectStore = transaction.objectStore("clients");
// //objectStore.openCursor().onsuccess = function (event) {
// indexedDB.openCursor().onsuccess = function (event) {
//   var cursor = event.target.result;
//   if (cursor) {
//     //console.log("Projects for" + cursor.key + "is" + cursor.value.name);
//     console.log(
//       "Projects for" +
//         cursor.key +
//         "Name: " +
//         cursor.value.name +
//         ", Email: " +
//         cursor.value.email
//     );
//     cursor.continue();
//   } else {
//     console.log("no more projects");
//   }
// };
// // var request = objectStore.get ("name");
// request.onerror = function (event) {
//   console.log("Whoops!" + event.target.errorCode);
// };

// request.onsuccess = function (event) {
//   console.log("Project for" + request.result.client);
// };

// //UPDATING DATA//

// var objectStore = db
//   .transaction(["clients"], "readwrite")
//   .objectStore("clients");
// var requestName = objectStore.get("name");
// requestName.onerror = function (event) {
//   console.log("Whoops!" + event.target.errorCode);
// };

// request.onsuccess = function (event) {
//   var data = event.target.result;
//   data.name = "Sue";
//   data.email = "sue@email.com";
//   var requestUpdate = objectStore.put(data);
//   requestUpdate.onerror = function (event) {
//     console.log("Whoops!" + event.target.errorCode);
//   };
//   requestUpdate.onsuccess = function (event) {
//     console.log("Your project client is updated.");
//   };
// };
export default App;
