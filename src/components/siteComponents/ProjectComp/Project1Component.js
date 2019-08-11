import React, { Component } from "react";
import FormCard from "./FormCard";
import AccountList from "./AccountList";
import { Button, ButtonGroup } from "react-bootstrap";

export class Project1Component extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      counter: 0
    };
  }

  //Функции с редактированием карточек

  //Добавить аккаунт в лист
  addAccount = newAcc => this.setState({ list: [...this.state.list, newAcc] });
  //Удалить аккаунт из листа
  delAccount = id =>
    this.setState({
      list: [...this.state.list.filter(acc => acc.id !== id)]
    });
  //Удаление всех аккантов
  deleteAllAccounts = () => this.setState({ list: [] });

  //---------------//

  //Функции работы с листом аккаунтов

  //Сортировка листа по zip
  sortByZip = () => this.setState({list: this.state.list.sort((a,b) => a.zip - b.zip)})

  //Вернуть к стандарту
  setToNormal = () => this.setState({list: this.state.list.sort((a,b) => a.counter - b.counter)})
  
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
            margin: "10px 30px",
            padding: '10px',
            fontWeight: 300,
            display: "flex",
            alignItems: "center",
            fontSize: '20px'
          }}
        >
          Account List{" "}
          <ButtonGroup style={{margin: '0 0 0 10px'}}>
            <Button style={{fontSize: '12px', padding: '5px'}} onClick={this.setToNormal}>Normal list</Button>
            <Button style={{fontSize: '12px', padding: '5px'}} onClick={this.sortByZip} variant="success">Sort by zip</Button>
            <Button style={{fontSize: '12px', padding: '5px'}} onClick={this.deleteAllAccounts} variant="danger">Delete all accounts</Button>
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
