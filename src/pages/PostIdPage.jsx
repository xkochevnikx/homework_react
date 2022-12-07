import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PostServise from "../components/API/PostServise";
import PostIdComments from "../components/PostIdComments";
import Loader from "../components/UI/Loader/Loader";
import useFetching from "../hooks/useFetching";

const PostIdPage = () => {
  const { id } = useParams();

  //? обращать внимание на дефолтное значение стейта поскольку если в обьект прилетит массив его не возможно будет перебрать методами массива
  const [post, setPost] = useState({});
  const [postCom, setPostCom] = useState([]);

  const [getById, isIdLoading, errorId] = useFetching(async () => {
    const response = await PostServise.getById(id);
    setPost(response.data);
  });

  useEffect(() => {
    getById(id);
  }, []);

  return (
    <div>
      {errorId && <h1>Произошла ошибка ${errorId}</h1>}
      {isIdLoading ? (
        <Loader />
      ) : (
        <h1>
          Вы открыли элемент {post.id} {post.title}
        </h1>
      )}
      <PostIdComments postCom={postCom} setPostCom={setPostCom} id={id} />
    </div>
  );
};

export default PostIdPage;
