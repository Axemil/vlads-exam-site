import React, { Component } from "react";
import FormCard from "./FormCard";
import AccountList from "./AccountList";
import accountList from "../../../assets/jsonFiles/accountList";

export class Project1Component extends Component {
  constructor() {
    super();
    this.state = {
      list: accountList
    };
  }
  getOnChange = e => console.log(e.target.id.value);
  render() {
    return (
      <div className="project1__wrap">
        <h3 style={{ margin: "5px 20px", fontWeight: 300 }}>
          Form for creating new "account"
        </h3>
        <FormCard getOnChange={this.getOnChange} />
        <h2 style={{ margin: "10px 30px 0", fontWeight: 300 }}>Account List</h2>
        <AccountList accountList={this.state.list} />
      </div>
    );
  }
}

export default Project1Component;
