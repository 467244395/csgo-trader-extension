import React from "react";
import { Accordion, Button } from "react-bootstrap";

const AccordionElement = (props) => {
  return (
    <div className="buildingBlock">
      <Accordion.Toggle as={Button} variant="link" eventKey={props.id}>
        <h2>{props.title}</h2>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={props.id}>
        <p>{props.body}</p>
      </Accordion.Collapse>
    </div>
  );
};

export default AccordionElement;
