import React, { Component } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class BurgerMenu extends Component {
  toggleMenu = e => {
    //Получаем доступ к елементам
    let menu = document.querySelector(".burger-menus"),
      overlay = document.querySelector(".overlay"),
      links = document.querySelector(".burger-menus p"),
      button = document.querySelector(".burger-menu-button");

    //Активируем режим бургер-меню
    menu.classList.add("burger-menus-active");
    overlay.classList.add("overlay-active");
    document.body.classList.add("active-menu");

    //Вешаем на всё обработчик что бы выключать бургер меню
    [menu, overlay, links, button].forEach(item => {
      item.addEventListener("click", toggleLocalMenu);
    });

    //Функция отключения режима бургера-меню
    function toggleLocalMenu() {
      menu.classList.remove("burger-menus-active");
      overlay.classList.remove("overlay-active");
      document.body.classList.remove("active-menu");
    }
  };
  render() {
    return (
      <div className="nav-items">
        <FontAwesomeIcon onClick={this.toggleMenu} icon={faBars} />
      </div>
    );
  }
}

export default BurgerMenu;
