import React from "react";

const Nav = props => (
  <div>
    <nav className="navbar fixed-top" style={{ marginBottom: "40px", backgroundColor: "gray", height: "40px" }}>
      <ul className="nav navbar-nav navbar-left">
        <li>
          <a href="/" style={{ color: "white", textDecoration: "none", fontSize: "20px" }}>
            Home
          </a>
        </li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a href="/savedbooks" style={{ color: "white", textDecoration: "none", fontSize: "20px" }}>
            Saved Books
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Nav;
