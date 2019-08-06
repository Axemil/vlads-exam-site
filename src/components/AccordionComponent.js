import React from "react";
import { Carousel } from "react-bootstrap";

class AccordionComponent extends React.Component {
  render() {
    return (
      <>
        <Carousel>
          {this.props.arrayAccordion.map(item => (
            <Carousel.Item>
              <img
                className="d-block w-100 carousel__img"
                src={item.url}
                alt={item.id + '# slide'}
              />
              <Carousel.Caption>
                <h3>{item.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </>
    );
  }
}

export default AccordionComponent;
