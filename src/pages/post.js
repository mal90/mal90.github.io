import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

import postlist from "../posts.json"

const Post = (props) => {

  const validId = parseInt(props.match.params.id)
  if (!validId) {
    return
  }

  const fetchedPost = {}

  postlist.forEach((post, i) => {
      if (validId === post.id) {
        fetchedPost.title = post.title ? post.title : "No title given"
        fetchedPost.date = post.date ? post.date : "No date given"
        fetchedPost.author = post.author ? post.author : "No author given"
        fetchedPost.content = post.content ? post.content : "No content given"
      }
  })

  return (
    <div className="post-container">
      <Link className="go-back" to="/blog"> back to all posts </Link>
      <h4 className="post-title">{fetchedPost.title}</h4>
      <small>Published on {fetchedPost.date} by {fetchedPost.author}</small>
      <hr/>
      <div className="markdown-container">
        <ReactMarkdown children={fetchedPost.content}/>
      </div>
    </div>
  );
}

export default Post;