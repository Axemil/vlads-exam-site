import React, { Component } from "react";
import { Navbar, Form, FormControl, Button, Nav } from "react-bootstrap";

export class Footer extends Component {
  render() {
    return (
      <Navbar bg="dark">
        <Button style={{margin: 'auto'}} variant="dark"><h4><a style={{color: 'whitesmoke', textDecoration: 'none'}} href="https://github.com/Axemil">&copy; 2019 Ban team</a></h4></Button>
      </Navbar>
    );
  }
}

export default Footer;
