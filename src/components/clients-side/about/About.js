import React, { Component } from 'react';
import axios from 'axios';
import './about.css';

export class About extends Component {
   constructor(){
       super();
       this.state = {
           admins: []
       }
   }
    componentDidMount(){
        axios.get('/api/admins').then( response => {
            this.setState({
                admins: response.data
            })
        })
    }
  render() {
    let { admins } = this.state;
    let mappedAdmins = admins.map( (admin) => {
        return (
            <div className='about' key={admin.user_id}>
                <img src={admin.picture} style={{height:'100px'}} alt='pictures' />
                <h1> {admin.first_name} {admin.last_name} </h1>
                <p>{admin.bio}</p>
            </div>
        )
    })
    return (
      <div>
        {mappedAdmins}
      </div>
    )
  }
}

export default About;
