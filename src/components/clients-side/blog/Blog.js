import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import './blogs.css'

export class Blog extends Component {
  constructor() {
    super();
    this.state = {
      blog: [],
      editMode: false,
      blog_body: ""
    };
  }

  componentDidMount() {
    axios
      .get(`/api/blog/${this.props.match.params.blog_id}`)
      .then(response => {
        this.setState({
          blog: response.data
        });
      })
      .catch(err => console.log(err));
  }

  updateBlogBodyState = (id) => {
    let { blog, blog_body, editMode } = this.state;
    console.log(blog.blog_id, blog_body);

    editMode === false
      ? this.setState({
          editMode: this.state.editMode === false ? true : false,
          blog_body: this.state.blog.blog_body
        })
      : axios
          .put(
            `/api/blog/${id}/${blog_body}`
          )
          .then(response => {
            this.setState({
              blog: response.data,
              editMode: false
            });
          });
  };

  render() {
    let { blog, blog_body, editMode } = this.state;
    console.log(blog.blog_id, blog_body);
    let mappedBlog = blog.map(blog => {
      return (
        <div className="singleBlog" key={blog.blog_id}>
          <h1>{blog.blog_title}</h1><br />
          {editMode === false ? (
            <p>{blog.blog_body}</p>
          ) : (
            <textarea value={blog_body}
              onChange={event => {
                this.setState({
                  blog_body: event.target.value
                });
              }}
            >
              {this.state.blog_body}
            </textarea>
          )}
          <br />
          {this.props.userObj.admin === true ? (
            <button
              style={{ float: "right", background: "white" }}
              onClick={() => this.updateBlogBodyState(blog.blog_id)}
            >
              {editMode === false ? "Edit Post" : "Save Post"}
            </button>
          ) : null}
        </div>
      );
    });
    console.log(this.state.editMode);
    return <div>{mappedBlog}</div>;
  }
}

const mapStateToProps = state => {
  return {
    userObj: state
  };
};

export default connect(mapStateToProps)(Blog);
