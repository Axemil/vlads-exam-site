import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AbsoluteWrapper from "../siteComponents/AbsoluteWrapper";
import arrayAccordion from "../../assets/jsonFiles/accordionList";
import AccordionComponent from "../siteComponents/AccordionComponent";
import CardList from "../siteComponents/CardList";
import cardList from "../../assets/jsonFiles/cardList";
import SampleStateChange from "../siteComponents/SampleStateChanger";

export class HomePage extends Component {
  render() {
    return (
      <>
        <AbsoluteWrapper>
          <div className="wrapper__home-page">
            <Container className="shadow border">
              <h2 className="main-page__header">Home page</h2>
              <Row className="row__class">
                <Col>
                  <AccordionComponent arrayAccordion={arrayAccordion} />
                </Col>
              </Row>
              <h2 className="main-page__header">My projects</h2>
              <Row className="row__class">
                <CardList cardList={cardList} />
              </Row>
              <Row className="row__class">
                <Col>
                  <SampleStateChange />
                </Col>
              </Row>
            </Container>
          </div>
        </AbsoluteWrapper>
      </>
    );
  }
}

export default HomePage;
