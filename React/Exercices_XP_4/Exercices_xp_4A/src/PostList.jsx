import React from "react";
import posts from "./posts.json";

function PostList() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "30px" }}>
          <h1>{post.title}</h1>
          {post.content && <p>{post.content}</p>}
        </div>
      ))}
    </div>
  );
}

export default PostList;