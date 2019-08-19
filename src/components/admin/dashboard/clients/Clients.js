import React, { Component } from "react";
import axios from "axios";
import AdminMenu from "../adminmenu/AdminMenu";
import { connect } from "react-redux";
import Home from "../../../clients-side/home/Home";

export class Clients extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get("/api/users").then(response =>
      this.setState({
        users: response.data
      })
    );
  }

  render() {
    let { users } = this.state;
    console.log(users);
    console.log(this.state.userObj);
    let mappedUsers = users.map(user => {
      return (
        <tr key={user.id}>
          <td>
            {user.first_name} {user.last_name}
          </td>
          <td> {user.phone_number}</td>
          <td> {user.email}</td>
        </tr>
      );
    });

    return (
      <div>
        <div>
          <AdminMenu />
          <table>
            <tr>
              <td>Name</td>
              <td>Phone Number</td>
              <td>Email</td>
            </tr>
            {mappedUsers}
          </table>
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

export default connect(mapStateToProps)(Clients);
