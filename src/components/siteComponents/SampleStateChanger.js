import React, { Component } from "react";
import { Button, ButtonToolbar, Form, ListGroup } from "react-bootstrap";
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
        <h2 style={{ fontWeight: 300 }}>Test block for working with state</h2>
        <h3 style={{ margin: "30px 0", fontWeight: 300 }}>
          Counter: {this.state.counter}
        </h3>
        <ButtonToolbar
          className="border"
          aria-label="Toolbar with Button groups"
          style={{ display: "inline-flex", justifyContent: "center" }}
        >
          <Button
            onClick={this.inkrement}
            className="btn_state-changer"
            variant="outline-primary"
          >
            Increase
          </Button>
          <Button
            onClick={this.zeroed}
            className="btn_state-changer"
            variant="outline-warning"
          >
            Zeroed
          </Button>
          <Button
            onClick={this.dinkrement}
            className="btn_state-changer"
            variant="outline-danger"
          >
            Reduce
          </Button>
        </ButtonToolbar>
        <Form
          onSubmit={this.setValue}
          style={{ margin: "15px 0", display: "flex", flexWrap: "nowrap" }}
          inline
        >
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
        <ListGroup.Item>
          <h3 style={{ fontWeight: 300 }}>Instruction manual</h3>
          <ListGroup.Item
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            Increase on N counter (by default 1)
            <Button style={{ margin: "0 0 0 15px" }} variant="outline-primary">
              Прибавить
            </Button>
          </ListGroup.Item>
          <ListGroup.Item
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            Reduce on N counter (by default 1)
            <Button style={{ margin: "0 0 0 15px" }} variant="outline-danger">
              Reduce
            </Button>
          </ListGroup.Item>
          <ListGroup.Item
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            Zero out the counter
            <Button style={{ margin: "0 0 0 15px" }} variant="outline-warning">
              Zero out
            </Button>
          </ListGroup.Item>
          <ListGroup.Item
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            Enter new value of N
            <Button style={{ margin: "0 0 0 15px" }} variant="success">
              Submit
            </Button>
          </ListGroup.Item>
        </ListGroup.Item>
      </div>
    );
  }
}

export default SampleStateChanger;
