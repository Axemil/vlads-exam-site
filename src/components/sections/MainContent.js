import React, { useContext } from "react";
import { Route, Switch, __RouterContext } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Project1 } from "../pages/Project1";
import { Project2 } from "../pages/Project2";

const MainContent = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/project1" component={Project1} />
        <Route exact path="/project2" component={Project2} />
      </Switch>
    </main>
  );
};
export default MainContent;
