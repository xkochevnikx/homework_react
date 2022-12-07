import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import PageNotFound from "../pages/PageNotFound";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostIdPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
