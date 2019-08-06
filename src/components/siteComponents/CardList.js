import React, { Component } from "react";
import { Col } from "react-bootstrap";
import CardComponent from "./CardComponent";

export class CardList extends Component {
  render() {
    return (
      <>
        {this.props.cardList.map(item => (
          <Col className="card__col">
            <CardComponent cardInfo={item}/>
          </Col>
        ))}
      </>
    );
  }
}

export default CardList;
