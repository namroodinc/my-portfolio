import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header
        className="header"
      >
        <div
          className="header__logo"
        >
          <a
            href="/"
          >
            Ashoor Namrood
          </a>
        </div>

        <div
          className="header__navigation"
        >
          <a
            href="/"
          >
            Home
          </a>
          <a
            href="/page"
          >
            Page
          </a>
        </div>
      </header>
    );
  }
}
