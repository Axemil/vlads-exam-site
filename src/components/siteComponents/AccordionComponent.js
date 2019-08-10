import React from "react";
import { Carousel } from "react-bootstrap";

class AccordionComponent extends React.Component {
  render() {
    return (
      <>
        <Carousel style={{zIndex: 7}}>
          {this.props.arrayAccordion.map(item => (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100 carousel__img"
                src={item.url}
                alt={item.id + '# slide'}
                style={{zIndex: 7}}
              />
              <Carousel.Caption style={{zIndex: 7}}>
                <h3 style={{zIndex: 7}}>{item.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </>
    );
  }
}

export default AccordionComponent;
