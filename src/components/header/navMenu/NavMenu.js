import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../../header/header.css";
import HamburgerBtn from "../hamburgerBtn/HamburgerBtn"

class NavMenu extends Component {
    constructor(){
      super();
      this.state ={

      }
    }
  navLinkStyle = () => {
    return {
      textDecoration: "inherit",
      color: "inherit",
    };
  };

  render() {
    return (
      
      <nav>
        <ol>
          <li>
            <Link style={this.navLinkStyle()} to="/blogs">
              Blogs
            </Link>
          </li>
          <li>
            <Link style={this.navLinkStyle()} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link style={this.navLinkStyle()} to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link style={this.navLinkStyle()} to="/stripe">
              Donate
            </Link>
          </li>

          {this.props.userObj.user.admin === true ? (
            <li>
              <Link style={this.navLinkStyle()} to="/dashboard/clients">
                Admin
              </Link>
            </li>
          ) : null}
        </ol>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  console.log("state===> ", state);
  return {
    userObj: state,
  };
};

export default connect(mapStateToProps)(NavMenu);
