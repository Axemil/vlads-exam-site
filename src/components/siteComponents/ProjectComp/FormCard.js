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
      zipForm: ""
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
      zip: this.state.zipForm
    })
    this.setState({
      emailForm: "",
      passwordForm: "",
      addressForm: "",
      cityForm: "",
      zipForm: ""
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
              placeholder="Enter email"
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
            placeholder="1234 Main St"
            value={this.state.addressForm}
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="cityForm">
            <Form.Label>City</Form.Label>
            <Form.Control
              onChange={this.getOnChange}
              type="text"
              value={this.state.cityForm}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="zipForm">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              onChange={this.getOnChange}
              value={this.state.zipForm}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button type="submit" variant="primary">
          Create new account
        </Button>
      </Form>
    );
  }
}

export default FormCard;
