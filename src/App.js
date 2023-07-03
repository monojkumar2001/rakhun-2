import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Welcome from "./components/Welcome";
import mint from "./components/mint";
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        {/* <Route path="/" exact component={Welcome} /> */}
       
        <Route path="/" exact component={Home} />
        <Route path="/mint" exact component={mint} />
        
      </Switch>
      <Footer/>
    </Router>
  );
};

export default App;
