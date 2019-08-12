import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const ButtonGroupComponent = props => {
  return (
    <ButtonGroup style={{ margin: "0 0 0 10px" }}>
      {props.info.map(item => (
        <Button
          style={{ fontSize: "12px", padding: "5px" }}
          onClick={item.func}
          variant={item.variant}
        >
          {item.title}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default ButtonGroupComponent;
