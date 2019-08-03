import React, { Component } from "react";
import { Route,Switch } from 'react-router-dom'
import { HomePage } from './HomePage'
import { Project1 } from './Project1'
import { Project2 } from './Project2'

export class MainContent extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} ></Route>
          <Route path="/project1" component={Project1}></Route>
          <Route path="/project2" component={Project2}></Route>
        </Switch>
      </main>
    );
  }
}

export default MainContent;
