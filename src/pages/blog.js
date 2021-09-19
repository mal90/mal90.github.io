import React from "react";
import { Link }  from "react-router-dom"

import postlist from "../posts.json"

const Blog = (props) => {
  return (
    <span className="blog-container">
      <h3 className="main-title">All Posts</h3>
      <ul>
      { postlist.length &&
        postlist.map((post, i) => {
          return (
            <li key={i} className="post-item">
              <h4><Link className="links" to={`/post/${post.id}`}>{post.title}</Link></h4>
              <small>Published on {post.date} by {post.author}</small>
            </li>
          )
        })
      }
      </ul>
    </span>
  );
}

export default Blog;