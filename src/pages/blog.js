import React from "react";
import { Link }  from "react-router-dom"

import postlist from "../posts.json"

const Blog = (props) => {
  return (
    <div className="blog-container">
      <h3 className="main-title">All Posts</h3>
      <ul>
      { postlist.length &&
        postlist.map((post, i) => {
          return (
            <Link className="links" to={`/post/${post.id}`}>
              <li key={i} className="post-item">
                <h4>{post.title}</h4>
                <small>Published on {post.date} by {post.author}</small>
              </li>
            </Link>
          )
        })
      }
      </ul>
    </div>
  );
}

export default Blog;