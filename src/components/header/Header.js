import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import HambergerBtn from "./hamburgerBtn/HambergerBtn";
import NavMenu from "./navMenu/NavMenu";
import Login from "../form/login/Login";
import "./header.css";

export class Header extends Component {
  constructor() {
    super();
    this.state = {
      toggleNav: false
    };
  }

  // toggleNavFnc = () => {
  //   let { toggleNav } = this.state;
  //   toggleNav === false
  //     ? this.setState({
  //         toggleNav: true
  //       })
  //     : this.setState({
  //         toggleNav: false
  //       });
  // };

  render() {
    // let { toggleNav } = this.state;
    let { user } = this.props.userObj;
    console.log(user);
    return (
      <header>
        <Link to="/">Lorem</Link>
        {/* <HambergerBtn /> */}
        {user ? <NavMenu /> : <Login />}
      </header>
    );
  }
}

const mapStateToProps = state => {
  console.log("state===> ", state);
  return {
    userObj: state
  };
};

export default connect(mapStateToProps)(Header);
