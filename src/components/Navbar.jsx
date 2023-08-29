import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GiTigerHead } from "react-icons/gi";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="nav container">
      <Link to="/" href="#home" className="nav__logo ">
        <span>
          <GiTigerHead className="nav__icon" /> A.{" "}
        </span>
      </Link>
      <Nav className="nav__list">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav__link active" : "nav__link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav__link active" : "nav__link"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/Service"
          className={({ isActive }) =>
            isActive ? "nav__link active" : "nav__link"
          }
        >
          Service
        </NavLink>
        <NavLink
          to="/Portfolio"
          className={({ isActive }) =>
            isActive ? "nav__link active" : "nav__link"
          }
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/Blog"
          className={({ isActive }) =>
            isActive ? "nav__link active" : "nav__link"
          }
        >
          Blog
        </NavLink>
      </Nav>
      <Link to="/">
        <button className="nav__button">Contact </button>
      </Link>
    </Navbar>
  );
}

export default NavBar;
