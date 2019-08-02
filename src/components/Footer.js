import React, { Component } from "react";
import { Navbar, Form, FormControl, Button, Nav } from "react-bootstrap";

export class Footer extends Component {
  render() {
    return (
      <Navbar bg="dark">
        <Button style={{margin: 'auto'}} variant="dark"><h4>&copy; 2019 Vlads team</h4></Button>
      </Navbar>
    );
  }
}

export default Footer;
