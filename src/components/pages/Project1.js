import React, { Component } from "react";
import AbsoluteWrapper from "../siteComponents/AbsoluteWrapper";
import { Container, Row, Col } from "react-bootstrap";
import Project1Component from "../siteComponents/ProjectComp/Project1Component";

export class Project1 extends Component {
  render() {
    return (
      <AbsoluteWrapper>
        <Container className="shadow border">
          <h2 className="main-page__header">Project #1</h2>
          <Row>
            <Col className="row__class">
              <Project1Component />
            </Col>
          </Row>
        </Container>
      </AbsoluteWrapper>
    );
  }
}

export default Project1;
