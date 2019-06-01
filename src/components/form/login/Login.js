import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { userFn } from "../../../ducks/reducer";
import "./login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }
  getMessage = error =>
    error.response
      ? error.response.data
        ? error.response.data.message
        : JSON.stringify(error.response.data, null, 2)
      : error.message;

  login = () => {
    this.setState({ message: null });
    axios
      .post("/login", {
        username: this.refs.username.value,
        password: this.refs.password.value
      })
      .then(response => {
        console.log(response.data);
        this.props.userFn([response.data]);
      })
      .catch(error => {
        this.setState({
          message: "Something went wrong: " + this.getMessage(error)
        });
      });
  };
  render() {
    return (
      <form className="login" onSubmit={e => e.preventDefault()}>
        <div>
          <label>Username: </label>
          <input type="text" ref="username" />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" ref="password" />
        </div>
        <input type="submit" value="Log In" onClick={() => this.login()} />
      </form>
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
)(Login);
