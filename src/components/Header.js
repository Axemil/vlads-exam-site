import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faGithub,
  faTelegram
} from "@fortawesome/free-brands-svg-icons";
import BurgerMenu from "./BurgerMenu";
import MainBurgerMenu from "./MainBurgerMenu";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <header>
        <Navbar fixed="top" bg="dark" variant="dark">
          <Nav className="burger-menu">
            <BurgerMenu />
          </Nav>
          <Navbar.Brand href="#home">
            <Link style={{color: "whitesmoke", textDecoration: 'none'}} className="logo" to="/">
              <FontAwesomeIcon
                className="logo-item"
                style={{ fontSize: "40px", margin: "0 3px" }}
                icon={faReact}
              />
              <h2>Ban team</h2>
            </Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <h4 className="nav-items">
              <Link style={{color: "whitesmoke", textDecoration: 'none'}} to="/project1">Project #1</Link>
            </h4>
            <h4 className="nav-items">
              <Link style={{color: "whitesmoke", textDecoration: 'none'}} to="/project2">Project #2</Link>
            </h4>
          </Nav>
          <Nav>
            <a className="icons" style={{margin:'10px'}} target="_blank"  href="https://github.com/Axemil/vlads-exam-site">
              <FontAwesomeIcon className="nav-items icons" icon={faGithub} />
            </a>
            <a className="icons" style={{margin:'10px'}} target="_blank" href="https://t.me/axemilon">
              <FontAwesomeIcon className="nav-items icons" icon={faTelegram} />
            </a>
          </Nav>
        </Navbar>
        <MainBurgerMenu />
      </header>
    );
  }
}

export default Header;
