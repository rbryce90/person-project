import React, { Component } from "react";
import { connect } from "react-redux";
import { userFn } from "../../../ducks/reducer";
import Welcome from "./welcome/Welcome";
import Mozart from "../../../media/IMG_2713.jpeg";
import "./home.css";
import axios from "axios";

export class Home extends Component {
  getMessage = error =>
    error.response
      ? error.response.data
        ? error.response.data.message
        : JSON.stringify(error.response.data, null, 2)
      : error.message;

  login = () => {
    this.setState({ message: null });
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    axios
      .post("/login", {
        username,
        password
      })
      .then(response => {
        this.props.userFn(response.data);
      })
      .catch(error => {
        this.setState({
          message: "Something went wrong: " + this.getMessage(error)
        });
      });
  };

  render() {
    console.log();
    console.log(this.props.userObj.user.length);
    return (
      <div className="home" style={{ backgroundColor: "rgb(209, 209, 209" }}>
        {this.props.userObj.user.length === 0 ? (
          <form onSubmit={e => e.preventDefault()}>
            <h1>Username: </h1>
            <input type="text" ref="username" />
            <h1>Password: </h1>
            <input type="password" ref="password" />
            <input type="submit" value="Log In" onClick={this.login} />
          </form>
        ) : (
          <Welcome />
        )}
        <img src={Mozart} alt="placeholder" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userObj: state
  };
};

const mapDispatchToProps = {
  userFn: userFn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
