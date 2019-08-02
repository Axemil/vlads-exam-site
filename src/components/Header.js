import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faGithub,
  faTelegram
} from "@fortawesome/free-brands-svg-icons";
import BurgerMenu from "./BurgerMenu";

export class Header extends Component {
  render() {
    return (
      <header>
        <Navbar fixed="top" bg="dark" variant="dark">
          <Nav className="burger-menu">
            <BurgerMenu />
          </Nav>
          <Navbar.Brand className="logo" href="#home">
            <FontAwesomeIcon
              className="logo-item"
              style={{ fontSize: "40px", margin: "0 3px" }}
              icon={faReact}
            />
            <h2>Vlads team</h2>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <h4 className="nav-items">Home</h4>
            </Nav.Link>
            <Nav.Link href="#link">
              <h4 className="nav-items">Link</h4>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#home">
              <FontAwesomeIcon className="nav-items icons" icon={faGithub} />
            </Nav.Link>
            <Nav.Link href="#link">
              <FontAwesomeIcon className="nav-items icons" icon={faTelegram} />
            </Nav.Link>
          </Nav>
        </Navbar>
        <div className="burger-menus burger-menus-unactive"></div>
      </header>
    );
  }
}

export default Header;
