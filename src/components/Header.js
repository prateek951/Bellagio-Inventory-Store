import React, { Fragment } from "react";
import PropTypes from "prop-types";

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

Header.propTypes = {
  tagline: PropTypes.string.isRequired
};

export default Header;
