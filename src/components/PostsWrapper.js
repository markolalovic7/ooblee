import React from "react";
import Filter from "./Filter";
import MiniStoresBanner from "./MiniStoresBanner";
import Posts from "./Posts";
import Search from "./Search";

function PostsWrapper() {
  return (
    <>
      <Search />
      <br />
      {/* <Filter />
      <MiniStoresBanner />
      <Posts /> */}
    </>
  );
}

export default PostsWrapper;