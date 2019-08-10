import React, { Component } from "react";
import FormCard from "./FormCard";
import AccountList from "./AccountList";
import { Button, ButtonGroup } from "react-bootstrap";

export class Project1Component extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }

  //Добавить аккаунт в лист
  addAccount = newAcc => this.setState({ list: [...this.state.list, newAcc] });
  //Удалить аккаунт из листа
  delAccount = id =>
    this.setState({
      list: [...this.state.list.filter(acc => acc.id !== id)]
    });
  deleteAllAccounts = () => this.setState({ list: [] });
  render() {
    return (
      <div className="project1__wrap">
        <h3 style={{ margin: "5px 20px", fontWeight: 300 }}>
          Form for creating new "account"
        </h3>
        <FormCard addAccount={this.addAccount} />
        <h2
          className="border"
          style={{
            textAlign: 'center',
            margin: "10px 30px 0",
            padding: '10px',
            fontWeight: 300,
            display: "flex",
            alignItems: "center",
            fontSize: '20px'
          }}
        >
          Account List{" "}
          <ButtonGroup style={{margin: '0 0 0 10px'}}>
            <Button style={{fontSize: '14px', padding: '5px'}}>Sort by date</Button>
            <Button style={{fontSize: '14px', padding: '5px'}} variant="success">Sort by zip</Button>
            <Button style={{fontSize: '14px', padding: '5px'}} onClick={this.deleteAllAccounts} variant="danger">Delete all accounts</Button>
          </ButtonGroup>
        </h2>
        <AccountList
          delAccount={this.delAccount}
          accountList={this.state.list}
        />
      </div>
    );
  }
}

export default Project1Component;
