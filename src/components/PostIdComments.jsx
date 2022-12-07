import React, { useEffect } from "react";
import useFetching from "../hooks/useFetching";
import PostServise from "./API/PostServise";

const PostIdComments = ({ postCom, setPostCom, id }) => {
  const [getByCom, isComLoading, errorCom] = useFetching(async () => {
    const response = await PostServise.getByCom(id);
    setPostCom(response.data);
  });

  useEffect(() => {
    getByCom(id);
  }, []);

  console.log(postCom);

  return (
    <div>
      {postCom.map(comm => (
        <div style={{ margin: "20px" }}>
          <h3>{comm.email}</h3>
          <h3>{comm.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default PostIdComments;
