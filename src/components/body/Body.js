import React, { Component } from "react";
import Home from "../clients-side/home/Home";
import About from "../clients-side/about/About";
import Blogs from "../clients-side/blog/Blogs";
import Blog from "../clients-side/blog/Blog";
import Contact from "../clients-side/contact/Contact";
import Clients from "../admin/dashboard/clients/Clients";
import AddBlog from "../admin/dashboard/addblog/AddBlog";
import Stripe from "../clients-side/stripe/Stripe";
import "./body.css";
import { Route } from "react-router-dom";

export class Body extends Component {
  render() {
    return (
      <div className="body">
        <Route path="/stripe" component={Stripe} />
        <Route path="/contact" component={Contact} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/blog/:blog_id" component={Blog} />
        <Route path="/about" component={About} />
        <Route path="/dashboard/clients" component={Clients} />
        <Route path="/dashboard/addblog" component={AddBlog} />
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default Body;
