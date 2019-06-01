import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className={this.props.toggleNav === false ? "hide" : "show"}>
        <Link style={{ textDecoration: "none", color: "white" }} to="/blogs">
          Blogs
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/about">
          About
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/contact">
          Contact
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/stripe">
          Donate
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/dashboard/clients"
        >
          Admin
        </Link>
      </nav>
    );
  }
}
