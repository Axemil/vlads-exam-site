import React, { Component } from "react";
import { Button, ButtonToolbar, Form } from "react-bootstrap";
//Простой компонет счетчик с 3 кнопками для повторения изменений state'a
export class SampleStateChanger extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      value: 1,
      preValue: 1
    };
  }
  //Функции для изменения state'a

  //Увеличение
  inkrement = () =>
    this.setState({ counter: this.state.counter + this.state.value });
  //Уменьшение
  dinkrement = () =>
    this.setState({ counter: this.state.counter - this.state.value });
  //Обнуление
  zeroed = () => this.setState({ counter: 0, value: 1 });
  //Получить значение ввода
  getValue = e => this.setState({ preValue: e.target.value });
  //Подтвердить значение ввода
  setValue = e => {
    e.preventDefault();
    this.setState({ value: this.state.preValue * 1 });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
        className="state-changer__div"
      >
        <h1>Счетчик: {this.state.counter}</h1>
        <ButtonToolbar
          className="border"
          style={{ display: "inline-flex", justifyContent: "center" }}
        >
          <Button
            onClick={this.inkrement}
            className="btn_state-changer"
            variant="outline-primary"
          >
            Прибавить
          </Button>
          <Button
            onClick={this.zeroed}
            className="btn_state-changer"
            variant="outline-warning"
          >
            Обнулить
          </Button>
          <Button
            onClick={this.dinkrement}
            className="btn_state-changer"
            variant="outline-danger"
          >
            Убавить
          </Button>
        </ButtonToolbar>
        <Form onSubmit={this.setValue} style={{ margin: "15px 0", display: 'flex', flexWrap: 'nowrap' }} inline>
          <Form.Control
            onChange={this.getValue}
            name="inputValue"
            type="text"
            placeholder="Enter value"
          />
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default SampleStateChanger;
