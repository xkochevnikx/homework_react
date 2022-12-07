import React, { useState } from "react";
import MyButton from "../components/UI/Button/MyButton";
import MyInput from "../components/UI/Input/MyInput";

const PostForm = ({ create, setModal }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  function addNewPost(e) {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
    setModal(false);
  }

  return (
    <div>
      <form action="">
        <MyInput
          value={post.title}
          onChange={e => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="название"
        />

        <MyInput
          value={post.body}
          onChange={e => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="описание"
        />
        <MyButton type="submit" onClick={addNewPost}>
          Создать пост
        </MyButton>
      </form>
    </div>
  );
};

export default PostForm;
