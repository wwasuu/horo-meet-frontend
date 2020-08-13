import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Main from "./pages/main";
import Prediction from "./pages/prediction";
import Calendar from "./pages/calendar";
import Partner from "./pages/partner";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/prediction" component={Prediction} />
      <Route exact path="/calendar" component={Calendar} />
      <Route exact path="/partner" component={Partner} />
    </Switch>
  );
}

export default App;
