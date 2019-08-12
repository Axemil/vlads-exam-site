import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import uuid from "uuid";

export class FormCard extends Component {
  constructor() {
    super();
    this.state = {
      emailForm: "",
      passwordForm: "",
      addressForm: "",
      cityForm: "",
      zipForm: "",
      counter: 1
    };
  }
  //Получение и запись в во временный объект с формы
  getOnChange = e => this.setState({ [e.target.id]: e.target.value });
  //Передача данных в главный лист и добавление нового акка
  setOnChange = e => {
    e.preventDefault();
    this.props.addAccount({
      id: uuid.v4(),
      email: this.state.emailForm,
      password: this.state.passwordForm,
      address: this.state.addressForm,
      city: this.state.cityForm,
      zip: this.state.zipForm,
      date: new Date(),
      counter: this.state.counter
    });
    this.setState({
      emailForm: "",
      passwordForm: "",
      addressForm: "",
      cityForm: "",
      zipForm: "",
      counter: this.state.counter + 1
    });
  };
  render() {
    return (
      <Form
        onSubmit={this.setOnChange}
        style={{ padding: "20px", margin: "20px" }}
        className="border"
      >
        <Form.Row>
          <Form.Group as={Col} controlId="emailForm">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={this.getOnChange}
              type="text"
              placeholder="Email"
              value={this.state.emailForm}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="passwordForm">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={this.getOnChange}
              type="text"
              placeholder="Password"
              value={this.state.passwordForm}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="addressForm">
          <Form.Label>Address</Form.Label>
          <Form.Control
            onChange={this.getOnChange}
            placeholder="Address"
            value={this.state.addressForm}
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="cityForm">
            <Form.Label>City</Form.Label>
            <Form.Control
              onChange={this.getOnChange}
              type="text"
              placeholder="City"
              value={this.state.cityForm}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="zipForm">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              onChange={this.getOnChange}
              type="text"
              placeholder="Zip"
              value={this.state.zipForm}
            />
          </Form.Group>
        </Form.Row>

        <Button type="submit" variant="primary">
          Create new account
        </Button>
      </Form>
    );
  }
}

export default FormCard;
