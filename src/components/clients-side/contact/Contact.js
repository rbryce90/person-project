import React, { Component } from "react";
import axios from "axios";
import './contact.css';

export class Contact extends Component {
  constructor() {
    super();
    this.state = {
      admins: []
    };
  }
  componentDidMount() {
    axios.get("/api/admins").then(response => {
      this.setState({
        admins: response.data
      });
    });
  }
  render() {
    let { admins } = this.state;
    console.log(this.state.admins);
    let mappedContact = admins.map(admin => {
      return (
        <div className='contact'>
          <h1>
            {admin.first_name} {admin.last_name}
          </h1>
          <h2>Phone Number: {admin.phone_number}</h2>
          <h2>Email: {admin.email}</h2>
        </div>
      );
    });
    return <div>
        <h1 style={{fontSize:'50px'}}>Contact Us</h1>
        <hr/>
        {mappedContact}
        </div>;
  }
}

export default Contact;
