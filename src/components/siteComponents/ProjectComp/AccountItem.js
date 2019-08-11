import React, { Component } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";

export class AccountItem extends Component {
  addZero = value => value >= 10 ? value : '0' + value;
  render() {
    return (
      <Card key={this.props.info.id} style={{ width: "300px" }}>
        <Card.Header>Account #{this.props.info.id}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Email: {this.props.info.email}</ListGroup.Item>
          <ListGroup.Item>Password: {this.props.info.password}</ListGroup.Item>
          <ListGroup.Item>Address: {this.props.info.address}</ListGroup.Item>
          <ListGroup.Item>City: {this.props.info.city}</ListGroup.Item>
          <ListGroup.Item>Zip: {this.props.info.zip}</ListGroup.Item>
          <ListGroup.Item>Count: {this.props.info.counter}</ListGroup.Item>
          <ListGroup.Item>
            Date: {this.addZero(this.props.info.date.getDate())}.
            {this.addZero(this.props.info.date.getMonth() + 1)}.
            {this.addZero(this.props.info.date.getFullYear()) + " - "}
            {this.addZero(this.props.info.date.getHours())}:
            {this.addZero(this.props.info.date.getMinutes())}:
            {this.addZero(this.props.info.date.getSeconds())}
          </ListGroup.Item>
        </ListGroup>
        <Button
          onClick={() => this.props.delAccount(this.props.info.id)}
          variant="danger"
        >
          Delete Account
        </Button>
      </Card>
    );
  }
}

export default AccountItem;
