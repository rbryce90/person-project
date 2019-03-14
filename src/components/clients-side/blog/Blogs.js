import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./blogs.css";

export class Blogs extends Component {
  constructor() {
    super();
    this.state = {
      blogs: []
    };
  }

  componentDidMount() {
    axios.get("/api/blogs").then(response => {
      this.setState({
        blogs: response.data
      });
    });
  }

  deleteBlog = (id) => {
    console.log(id)
    axios.delete(`/api/blog/${id}`).then(response => {
      console.log(response.data);
      
      this.setState({
        blogs: response.data
      })
    })
  }

  render() {
    let { blogs } = this.state;
    console.log(this.props.userObj);
    let mappedBlogs = blogs.map(blog => {
      return (
        <div key={blog.blog_id}>
          { this.props.userObj.admin === true ? <button style={{ float: "right", background:'red' }} onClick={() => this.deleteBlog(blog.blog_id)} >X</button> : null}
          <Link to={`/blog/${blog.blog_id}`}>
            <div>
              <img src={blog.picture} alt="this is my alt" />

              <h1>{blog.blog_title}</h1>

              <h2>
                By: {blog.first_name} {blog.last_name}
              </h2>

              <hr />
            </div>
          </Link>
        </div>
      );
    });

    return <div className="blogs">{mappedBlogs}</div>;
  }
}


const mapStateToProps = state => {
  return {
    userObj: state
  };
};

export default connect(mapStateToProps)(Blogs);