import React, { Component } from "react";
import AdminMenu from "../adminmenu/AdminMenu";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import Home from "../../../clients-side/home/Home";
import "./addblog.css";

export class AddBlog extends Component {
  addBlog = () => {
    const { blog_title, blog_body } = this.refs;
    const { user_id } = this.props.userObj;
    console.log(blog_title.value, blog_body.value, user_id);
    const blogPost = {
      author_id: user_id,
      blog_title: blog_title.value,
      blog_body: blog_body.value
    };
    axios.post("/api/blog", blogPost).then();
  };
  render() {
    console.log(this.props.userObj.admin);
    return (
      <div>
        {this.props.userObj.admin === false ? (
          <Home />
        ) : (
          <div className="addblog">
            <AdminMenu />
            <form onSubmit={e => e.preventDefault()}>
              <label>Title:</label>
              <input type="text" ref="blog_title" />
              <label>Body:</label>
              <textarea
                rows="4"
                cols="50"
                name="comment"
                form="usrform"
                ref="blog_body"
              />
              <Link to="/blogs">
                <input type="submit" onClick={this.addBlog} />
              </Link>
            </form>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userObj: state
  };
};

export default connect(mapStateToProps)(AddBlog);
