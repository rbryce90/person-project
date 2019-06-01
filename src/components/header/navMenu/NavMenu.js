import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class NavMenu extends Component {
  navLinkStyle = () => {
    return {
      textDecoration: "none",
      color: "white",
      marginLeft: "10px",
      fontSize: "20pt"
    };
  };

  render() {
    return (
      <nav>
        <Link style={this.navLinkStyle()} to="/blogs">
          Blogs
        </Link>
        <Link style={this.navLinkStyle()} to="/about">
          About
        </Link>
        <Link style={this.navLinkStyle()} to="/contact">
          Contact
        </Link>
        <Link style={this.navLinkStyle()} to="/stripe">
          Donate
        </Link>
        {this.props.userObj.user.admin === true ? (
          <Link style={this.navLinkStyle()} to="/dashboard/clients">
            Admin
          </Link>
        ) : null}
      </nav>
    );
  }
}

const mapStateToProps = state => {
  console.log("state===> ", state);
  return {
    userObj: state
  };
};

export default connect(mapStateToProps)(NavMenu);
