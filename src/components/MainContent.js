import React, { Component, useContext } from "react";
import { Route, Switch, __RouterContext } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { HomePage } from "./HomePage";
import { Project1 } from "./Project1";
import { Project2 } from "./Project2";

const MainContent = () => {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(100%, 0)" },
    enter: { opacity: 1, transform: "translate(0%, 0)" },
    leave: { opacity: 0, transform: "translate(-50%, 0)" }
  });
  return (
    <main>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/project1" component={Project1} />
            <Route exact path="/project2" component={Project2} />
          </Switch>
        </animated.div>
      ))}
    </main>
  );
};
export default MainContent;
