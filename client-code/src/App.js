import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
// books homepage
import SavedPage from "./pages/SavedPage";
// details is saved page
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    // <Router>
    //   <div className="App">
    //   <Switch>
    //     <Route exact path="/" component={HomePage} />
    //     <Route  exact path="/saved" component={SavedPage} />
    //     <Route component={NoMatch}/>
    //   </Switch>
    //   </div>
    // </Router>
    <div>hello</div>

  );
}

export default App;
