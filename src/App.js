import React from "react";
import "./App.css";
import Home from "./components/Home";
import Cse from "./components/Cse";
import Ece from "./components/Ece";
import Eee from "./components/Eee";
import Mech from "./components/Mech";
import Csemart from "./components/Csemart";
import Ecemart from "./components/Ecemart";
import Eeemart from "./components/Eeemart";
import Mechmart from "./components/Mechmart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cse" component={Cse} />
        <Route path="/ece" component={Ece} />
        <Route path="/eee" component={Eee} />
        <Route path="/mech" component={Mech} />
        <Route path="/shop/cse/:id" component={Csemart} />
        <Route path="/shop/ece/:id" component={Ecemart} />
        <Route path="/shop/eee/:id" component={Eeemart} />
        <Route path="/shop/mech/:id" component={Mechmart} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
