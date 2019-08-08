import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";

export class AccountItem extends Component {
  render() {
    return (
      <Card key={this.props.info.id} style={{ width: "300px" }}>
        <Card.Header>Account #{this.props.info.id}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Email: {this.props.info.email}</ListGroup.Item>
          <ListGroup.Item>Password: {this.props.info.password}</ListGroup.Item>
          <ListGroup.Item>Address: {this.props.info.address}</ListGroup.Item>
          <ListGroup.Item>Zip: {this.props.info.zip}</ListGroup.Item>
        </ListGroup>
      </Card>
    );
  }
}

export default AccountItem;
