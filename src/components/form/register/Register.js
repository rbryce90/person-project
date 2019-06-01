import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { userFn } from "../../../ducks/reducer";
import "./Register.css";

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      message: null
    };
  }
  getMessage = error =>
    error.response
      ? error.response.data
        ? error.response.data.message
        : JSON.stringify(error.response.data, null, 2)
      : error.message;

  register = () => {
    console.log("hit");
    this.setState({ message: null });
    let {
      firstName,
      lastName,
      phoneNumber,
      email,
      username,
      password
    } = this.refs;
    axios
      .post("/register", {
        first_name: firstName.value,
        last_name: lastName.value,
        phone_number: phoneNumber.value,
        email: email.value,
        username: username.value,
        password: password.value
      })
      // .then(response => {
      //   console.log(response.data);
      //   this.setState({ user: response.data });
      // })
      .then(response => {
        console.log("response.data ===>", response.data);
        this.props.userFn(response.data);
      })
      .catch(error => {
        console.log(error);
        this.setState({
          message: "Something went wrong: " + this.getMessage(error)
        });
      });
  };

  render() {
    return (
      <form
        className="register"
        onSubmit={e => {
          e.preventDefault();
          this.register();
        }}
      >
        {/* onSubmit={e => e.preventDefault()} */}
        <h1>Register</h1>
        <h3>Lorem ipsum dolor sit amet.</h3>
        <input ref="firstName" type="text" placeholder="First Name" />
        <input type="text" ref="lastName" placeholder="Last Name" />
        <input type="text" ref="phoneNumber" placeholder="Phone Number" />
        <input type="text" ref="email" placeholder="Email" />
        <input type="text" ref="username" placeholder="Username" />
        <input
          id="register-password"
          type="password"
          ref="password"
          placeholder="Password"
        />
        <input id="reg-button" type="submit" placeholder="Create Account" />
      </form>
    );
  }
}

// export default Register;
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
)(Register);
