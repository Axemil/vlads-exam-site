import React, { Component } from "react";
import { Form, Button, Col } from 'react-bootstrap'

export class FormCard extends Component {
  render() {
    return (
      <Form style={{padding: '20px', margin: '20px'}} className="border">
        <Form.Row>
          <Form.Group as={Col} controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control onChange={this.props.getOnChange} type="text" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="Password">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={this.props.getOnChange} type="text" placeholder="Password" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="Address">
          <Form.Label>Address</Form.Label>
          <Form.Control onChange={this.props.getOnChange} placeholder="1234 Main St" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="City">
            <Form.Label>City</Form.Label>
            <Form.Control onChange={this.props.getOnChange} type="text"/>
          </Form.Group>

          <Form.Group as={Col} controlId="Zip">
            <Form.Label>Zip</Form.Label>
            <Form.Control onChange={this.props.getOnChange} />
          </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create new account
        </Button>
      </Form>
    );
  }
}

export default FormCard;
