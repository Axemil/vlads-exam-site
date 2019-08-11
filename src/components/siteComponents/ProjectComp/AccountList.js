import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import AccountItem from "./AccountItem";

export class AccountList extends Component {
  render() {
    return (
      <Row>
        {this.props.accountList.map(item => (
          <Col className="card__col">
            <AccountItem delAccount={this.props.delAccount} info={item}/>
          </Col>
        ))}
      </Row>
    );
  }
}

export default AccountList;
