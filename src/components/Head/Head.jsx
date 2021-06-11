import classes from "./Head.module.css";
import React from "react";
import logo from "../../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Head = () => {
  return (
    <div>
      <header className={classes.header}>
        <div className="container">
          <div className={classes.wrapper}>
            <figure className={classes.imgWrapper}>
              <NavLink to="/" exact>
                <img className={classes.img} src={logo} alt="logo" />
              </NavLink>
            </figure>
            <ul className={classes.list}>
              <li className={classes.item}>
                <NavLink to="/" exact className="link-hover">
                  Look at all recipes
                </NavLink>
              </li>
              <li className={classes.item}>
                <NavLink to="/add" exact className="link-hover">
                  Add new recipe
                </NavLink>
              </li>
            </ul>
            <a className={classes.telephone} href="tel:+420777270536">
              <FontAwesomeIcon icon={faPhone} />
              +420 777 270 536
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Head;
