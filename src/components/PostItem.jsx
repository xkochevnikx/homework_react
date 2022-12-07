import React from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./UI/Button/MyButton";

const PostItem = props => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="post">
        <div className="post_content">
          <strong>
            {" "}
            {props.post.id}. {props.post.title}
          </strong>

          <div>{props.post.body}</div>
        </div>
        <div className="post_btns">
          <MyButton onClick={() => props.delitePost(props.post)}>
            удалить
          </MyButton>
          <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>
            открыть
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
