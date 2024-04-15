import React from "react";
import PropTypes from "prop-types";
// here we have in our function only a render method, so we don't need to create a component with class Header extends React.Component
// there is no this so we put props in argument
const Header =  props  => (
  <header className="top">
    <h1>
      {" "}
      Catch
      <span className="ofThe">
        <span className="of"> Of </span>
        <span className="the"> The </span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span> {props.tagline} </span>
    </h3>
  </header>
);

Header.propTypes = {
  tagline: PropTypes.string.isRequired
}
export default Header;
