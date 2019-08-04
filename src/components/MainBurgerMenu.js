import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export class MainBurgerMenu extends Component {
  render() {
    return (
      <>
        <div className="burger-menus">
          <span>
            <Button variant="danger" className="burger-menu-button">
              X
            </Button>
          </span>
          <div className="list-links">
            <Link style={{ color: "whitesmoke", textDecoration: 'none' }} to="/">
              <p>Home</p>
            </Link>
            <Link style={{ color: "whitesmoke", textDecoration: 'none' }} to="/project1">
              <p>Project#1</p>
            </Link>
            <Link style={{ color: "whitesmoke", textDecoration: 'none' }} to="/project2">
              <p>Project#2</p>
            </Link>
            <a
              style={{ color: "whitesmoke", textDecoration: 'none' }}
              target="_blank"
              href="https://github.com/Axemil/vlads-exam-site"
            >
              <p>Github</p>
            </a>
            <a
              style={{ color: "whitesmoke", textDecoration: 'none' }}
              target="_blank"
              href="https://t.me/axemilon"
            >
              <p>Telegram</p>
            </a>
          </div>
        </div>
        <div className="overlay" />
      </>
    );
  }
}

export default MainBurgerMenu;
