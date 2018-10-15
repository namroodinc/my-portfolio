import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <header
        className="header"
      >
        <div
          className="header__logo"
        >
          <Link
            to="/"
          >
            PT
          </Link>
        </div>

        <div
          className="header__navigation"
        >
          <Link
            to="/"
          >
            Home
          </Link>
          <Link
            to="/page"
          >
            Page
          </Link>
        </div>
      </header>
    );
  }
}
