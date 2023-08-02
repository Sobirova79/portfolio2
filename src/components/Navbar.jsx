import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="nav">
      <Link to="/" href="#home" className="nav__logo">
        <img src={logo} alt="logo" />
        A.
      </Link>
      <Nav className="nav__list">
        <NavLink to="/" className="nav__link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav__link">
          About
        </NavLink>
        <NavLink to="/Service" className="nav__link">
          Service
        </NavLink>
        <NavLink to="/Portfolio" className="nav__link">
          Portfolio
        </NavLink>
        <NavLink to="/Blog" className="nav__link">
          Blog
        </NavLink>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
