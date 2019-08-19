module.exports = {
  adminBlog: (req, res, next) => {
    const db = req.app.get("db");
    db.join().then(posts => {
      res.status(200).json(posts);
    });
  },
  getBlog: (req, res, next) => {
    const db = req.app.get("db");
    const { blog_id } = req.params;
    db.get_blog(blog_id).then(blog => {
      res.status(200).json(blog);
    });
  },
  postBlog: (req, res, next) => {
    const db = req.app.get("db");
    const { author_id, blog_title, blog_body } = req.body;

    db.add_blog([author_id, blog_title, blog_body]).then(response => {
      res.status(200).json(response);
    });
  },
  deleteBlog: (req, res, next) => {
    const db = req.app.get("db");
    const { blog_id } = req.params;

    db.delete_blog(blog_id).then(response => {
      res.status(200).json(response);
    });
  },
  updateBlog: (req, res, next) => {
    const db = req.app.get("db");
    const { blog_id, blog_body } = req.params;
    console.log(req.params);

    db.update_blog([blog_id, blog_body]).then(response => {
      res.status(200).json(response);
    });
  }
};
