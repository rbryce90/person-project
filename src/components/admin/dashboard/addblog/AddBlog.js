import React, { Component } from "react";
// import AdminMenu from "../adminmenu/AdminMenu";
import { connect } from "react-redux";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Home from "../../../clients-side/home/Home";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// export class AddBlog extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   addBlog = () => {
//     const { blog_title, blog_body } = this.refs;
//     const { user_id } = this.props.userObj;
//     console.log(blog_title.value, blog_body.value, user_id);
//     const blogPost = {
//       author_id: user_id,
//       blog_title: blog_title.value,
//       blog_body: blog_body.value
//     };
//     axios.post("/api/blog", blogPost).then();
//   };

class AddBlog extends Component {
  render() {
    console.log(this.state);
    return (
      <div className="addBlog">
        <CKEditor
          editor={ClassicEditor}
          data="<h1>Title</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quod similique pariatur nesciunt eligendi, fugiat quos sunt fuga enim facilis, fugit, laborum minus aut saepe a quisquam et laboriosam voluptates.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eveniet, quas dolore magni, perferendis hic nesciunt non accusantium quae nam illo praesentium impedit perspiciatis commodi veniam atque ratione? Voluptatum, et dolore illum nisi consectetur delectus facere, culpa fuga praesentium eligendi iusto molestiae voluptates. Deserunt dolore debitis dolores iure consequatur quo dolor, eligendi tempore provident fugit recusandae aspernatur hic fuga inventore asperiores ipsum? Quam sed a molestias ipsa, ipsam explicabo! Qui!</p>"
          onInit={editor => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={editor => {
            console.log("Blur.", editor);
          }}
          onFocus={editor => {
            console.log("Focus.", editor);
          }}
        />
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
