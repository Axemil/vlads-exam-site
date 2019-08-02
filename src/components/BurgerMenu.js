import React, { Component } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class BurgerMenu extends Component {
  toggleMenu = () => {
    let menu = document.querySelector('.burger-menus').classList.toggle('burger-menus-unactive');
  }
  render() {
    return (
      <div onClick={this.toggleMenu} href="" className="burger-menu-button nav-items">
        <FontAwesomeIcon icon={faBars} />
      </div>
    );
  }
}

export default BurgerMenu;
