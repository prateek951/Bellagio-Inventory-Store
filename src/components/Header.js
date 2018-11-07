import React, { Fragment } from "react";

const Header = ({ restro, tagline }) => (
  <Fragment>
    <header className="top">
      <h1>{restro}</h1>
      <h3 className="tagline">
        <span>{tagline}</span>
      </h3>
    </header>
  </Fragment>
);

export default Header;
