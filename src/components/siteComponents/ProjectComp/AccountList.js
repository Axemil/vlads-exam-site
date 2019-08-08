import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import AccountItem from "./AccountItem";

export class AccountList extends Component {
  render() {
    return (
      <Row className="row__class">
        {this.props.accountList.map(item => (
          <Col className="card__col">
            <AccountItem info={item}/>
          </Col>
        ))}
      </Row>
    );
  }
}

export default AccountList;
