import React from "react";
import PostItem from "./PostItem";

const PostList = ({ post, title, delitePost }) => {
  if (!post.length) {
    return <h1 style={{ textAlign: "center" }}> Посты не найдены </h1>;
  }
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {post.map((post, index) => (
        <PostItem
          key={post.id}
          number={index + 1}
          post={post}
          delitePost={delitePost}
        />
      ))}
    </>
  );
};

export default PostList;
