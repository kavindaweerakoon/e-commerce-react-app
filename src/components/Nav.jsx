import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LibaryLogo from "../assets/Library.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

// navbar component

const Nav = ({ numberItems }) => {
  
  
  function openMenu() {
    // function that opens the menu
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    // function that closes the menu
    document.body.classList.remove("menu--open");
  }

  return (
    <div className="nav__container">
      <Link to="/">
        <img src={LibaryLogo} alt="" className="logo" />
      </Link>
      <ul className="nav__links">
        <li className="nav__list">
          <Link to="/" className="nav__link">
            Home
          </Link>
        </li>
        <li className="nav__list ">
          <Link to="/books" className="nav__link nav__link--primary">
            Books
          </Link>
        </li>
        <button className="btn__menu" onClick={openMenu}>
          <FontAwesomeIcon icon="bars" />
        </button>
        <li className="nav__icon">
          <Link to="/cart" className="nav__link">
            <FontAwesomeIcon icon="shopping-cart" />
          </Link>
          {
          // if cart has items, show number of items else show nothing 
          numberItems > 0 && <span className="cart__length ">{numberItems}</span>
          }
        </li>
      </ul>

      {/*
      // menu that appears when clicking on the menu button, see CSS to see how the menu is rendered when menu--open is added to the body
       */}
      <div className="menu__backdrop">
        <button className="btn__menu btn__menu--close" onClick={closeMenu}>
          <FontAwesomeIcon icon="times" />
        </button>
        <ul className="menu__links">
          <li className="menu__list">
            <Link to="/home" className="menu__link">
              Home
            </Link>
          </li>
          <li className="menu__list">
            <Link to="/books" className="menu__link">
              Books
            </Link>
          </li>
          <li className="menu__list">
            <Link to="/cart" className="menu__link">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
