import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./header.css";

export class Header extends Component {
  constructor() {
    super();
    this.state = {
      toggleNav: false
    };
  }
  render() {
    let { toggleNav } = this.state;
    let { user, admin } = this.props.userObj;
    console.log(toggleNav);
    return (
      <div className="header">
        <div>
          <div className="top">
            <h1>Not the Realtor for You</h1>
            <button
              onClick={() =>
                toggleNav === false
                  ? this.setState({
                      toggleNav: true
                    })
                  : this.setState({
                      toggleNav: false
                    })
              }
            >
              <div className="bar" />
              <div className="bar" />
              <div className="bar" />
            </button>
          </div>
          <ol className={toggleNav === false ? "hide" : "show"}>
            <div>
              <li>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Home
                </Link>
              </li>
            </div>
            {user.length === 0 ? (
              <div>
                <li>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/register"
                  >
                    Register
                  </Link>
                </li>
              </div>
            ) : null}
            {user.length !== 0 ? (
              <div>
                <li>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/blogs"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/stripe"
                  >
                    Donate
                  </Link>
                </li>
              </div>
            ) : null}
            {admin === true ? (
              <div>
                <li>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/dashboard/clients"
                  >
                    Admin
                  </Link>
                </li>
              </div>
            ) : null}
          </ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userObj: state
  };
};

export default connect(mapStateToProps)(Header);
