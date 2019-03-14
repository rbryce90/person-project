import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import "./form.css";

export class Form extends Component {
  constructor() {
    super();
    this.state = {
        user: null,
    };
  }

  getMessage = error =>
    error.response
      ? error.response.data
        ? error.response.data.message
        : JSON.stringify(error.response.data, null, 2)
      : error.message;

  register = () => {
    this.setState({ message: null });
    let {
      firstName,
      lastName,
      phoneNumber,
      email,
      username,
      password,
    } = this.refs;
    axios
      .post("/register", {
        first_name : firstName.value,
        last_name : lastName.value,
        phone_number : phoneNumber.value,
        email : email.value,
        username : username.value,
        password : password.value
      })
      .then(response => {
        this.setState({ user: response.data });
      })
      .catch(error => {
          console.log(error)
        this.setState({
          message: "Something went wrong: " + this.getMessage(error)
        });
      });
  };

  render() {
    return (
      <div className='register'>
        <form onSubmit={e => e.preventDefault()}>
          <h1>
            Create an account to get expert information on houses in the Pheonix
            area, already have an account? Click here to Log in!
          </h1>
          <br />
          <label>First Name: </label>
          <input ref="firstName" type="text" />
          <label>Last Name: </label>
          <input type="text" ref="lastName" />
          <label>Phone Number: </label>
          <input type="text" ref="phoneNumber" />
          <label>Email: </label>
          <input type="text" ref="email" />
          <label>Username: </label>
          <input type="text" ref="username" />
          <label>Password: </label>
          <input type="password" ref="password" />
          <Link to='/'><input type="submit"  onClick={this.register}/></Link>
        </form>
      </div>
    );
  }
}

export default Form;
