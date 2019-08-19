import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

export class AddBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  addBlog = () => {
    const { blog_title, blog_body } = this.refs;
    const { user_id } = this.props.userObj;
    console.log(blog_title.value, blog_body.value, user_id);
    const blogPost = {
      author_id: user_id,
      blog_title: blog_title.value,
      blog_body: blog_body.value,
    };
    axios.post("/api/blog", blogPost).then();
  };
  render() {
    return (
      <form>
        <label>Title</label>
        <input type="text" />
        <label>Body</label>
        <input type="text" />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    userObj: state,
  };
};

export default connect(mapStateToProps)(AddBlog);
