import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export class CardComponent extends Component {
  render() {
    return (
      <Card style={{ width: "300px" }}>
        <Card.Img variant="top" src={this.props.cardInfo.url} />
        <Card.Body>
          <Card.Title>{this.props.cardInfo.title}</Card.Title>
          <Card.Text>{this.props.cardInfo.text}</Card.Text>
          <Button variant="primary">
            <a
              rel="noopener noreferrer"
              target="_blank"
              style={{ color: "whitesmoke", textDecoration: "none" }}
              href={this.props.cardInfo.link}
            >
              Link to site
            </a>
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default CardComponent;
