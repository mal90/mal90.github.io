import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

import postlist from "../../posts.json"

const Post = (props) => {

  const validId = parseInt(props.match.params.id)
  if (!validId) {
    return
  }

  const fetchedPost = {}
  let postExists = false

  postlist.forEach((post, i) => {
      if (validId === post.id) {
          fetchedPost.title = post.title ? post.title : "No title given"
          fetchedPost.date = post.date ? post.date : "No date given"
          fetchedPost.author = post.author ? post.author : "No author given"
          fetchedPost.content = post.content ? post.content : "No content given"
          postExists = true
      }
  })

  return (
    <div className="post">
      <Link to="/blog"> Go back to list of posts </Link>
      <h2>{fetchedPost.title}</h2>
      <small>Published on {fetchedPost.date} by {fetchedPost.author}</small>
      <hr/>
      <ReactMarkdown children={fetchedPost.content} />
    </div>
  );
}

export default Post;