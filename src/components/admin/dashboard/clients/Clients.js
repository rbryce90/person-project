import React, { Component } from 'react';
import './clients.css';
import axios from "axios";
import AdminMenu from '../adminmenu/AdminMenu';
import { connect } from "react-redux";
import Home from '../../../clients-side/home/Home';

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
        let mappedUsers = users.map(user => {
          return (
            <div className='clients' key={user.id}>
              <h1>{user.first_name} {user.last_name}</h1>
              <h2> Phone number: {user.phone_number}</h2>
              <h2> Email: {user.email}</h2>
            </div>);
        });
    
        return (
          <div>
            {this.props.userObj.admin === false ? (
          <Home />
        ) :
            <div>
              <AdminMenu />
              {mappedUsers}
            </div>
            }

          </div>
         
        );
      
    }}

    const mapStateToProps = state => {
      return {
        userObj: state
      };
    };
    
    export default connect(mapStateToProps)(Clients);
    