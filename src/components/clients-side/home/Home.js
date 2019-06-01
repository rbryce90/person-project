import React, { Component } from "react";
import { connect } from "react-redux";
import Welcome from "./welcome/Welcome";
import Register from "../../form/register/Register";
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
    let { user } = this.props.userObj;
    return <div className="home">{user ? <Welcome /> : <Register />}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    userObj: state
  };
};

export default connect(mapStateToProps)(Home);
