import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AbsoluteWrapper from "./AbsoluteWrapper";
import arrayAccordion from "../assets/jsonFiles/accordionList";
import AccordionComponent from "./AccordionComponent";
export class HomePage extends Component {
  render() {
    return (
      <AbsoluteWrapper>
        <Container>
          <h2 className="main-page__header">Home page</h2>
          <Row>
            <Col>
              <AccordionComponent arrayAccordion={arrayAccordion} />
            </Col>
          </Row>
        </Container>
      </AbsoluteWrapper>
    );
  }
}

export default HomePage;
