import React from "react";
import PostForm from "../../PostForm";
import cl from "./MyModal.module.css";

const MyModal = ({ create, modal, setModal }) => {
  return (
    <div
      className={modal ? cl.myModal : cl.myModalClose}
      onClick={() => setModal(false)}>
      <div className={cl.myModalContent} onClick={e => e.stopPropagation()}>
        <PostForm create={create} setModal={setModal} />
      </div>
    </div>
  );
};

export default MyModal;
