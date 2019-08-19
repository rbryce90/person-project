import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import NavMenu from "./navMenu/NavMenu";
import Login from "../form/login/Login";
import HamburgerBtn from "./hamburgerBtn/HamburgerBtn";
import "./header.css";

export class Header extends Component {
  constructor() {
    super();
    this.state = {
      toggleNav: true,
    };
  }

  toggleNavFnc = () => {
    let { toggleNav } = this.state;
    toggleNav === false
      ? this.setState({
          toggleNav: true,
        })
      : this.setState({
          toggleNav: false,
        });
  };

  render() {
    let { user } = this.props.userObj;
    let { toggleNav } = this.state;
    console.log(toggleNav);
    return (
      <header>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/" className="logo">
            Lorem
          </Link>
          {user ? <HamburgerBtn toggleNav={this.toggleNavFnc} /> : null}
        </div>
        {!user ? <Login /> : null}
        {toggleNav === true ? null : <NavMenu />}
      </header>
    );
  }
}

const mapStateToProps = state => {
  console.log("state===> ", state);
  return {
    userObj: state,
  };
};

export default connect(mapStateToProps)(Header);
