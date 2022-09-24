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
            <Link key={post.id} className="links" to={`/post/${post.id}`}>
              <li className="post-item">
                <span class="post-title">
                  <ion-icon name="newspaper-outline"></ion-icon>
                  <h4>{post.title}</h4>
                </span>
                <span class="date">
                  <ion-icon name="calendar-number-outline"></ion-icon>
                  <small>Published on {post.date}</small>
                </span>
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