import React, { Component } from "react";
import { Link } from "react-router-dom";

export class AdminMenu extends Component {
  render() {
    return (
      <div>
        <h1 style={{ fontSize: "30px"}}>
          <Link to="/dashboard/clients">Clients</Link> /
          <Link to="/dashboard/addblog">Add Blog</Link>
        </h1>
        <hr />
      </div>
    );
  }
}

export default AdminMenu;
