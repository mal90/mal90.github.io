import React from "react";
import { Link }  from "react-router-dom"

import postlist from "../../posts.json"



const Blog = (props) => {

  console.log(postlist);

  return (
    <span className="blog-container">
      <h1 className="title">All Posts</h1>
      <ul>
      { postlist.length &&
        postlist.map((post, i) => {
          return (
            <li key={i} className="post-card">
              <h2><Link className="links" to={`/post/${post.id}`}>{post.title}</Link></h2>
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