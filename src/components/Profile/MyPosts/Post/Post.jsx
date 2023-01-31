import React from "react";
import c from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={c.post}>
      <img
        className={c.ava}
        src="https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"
      />
      <div>{props.name}</div>
      {props.message}
      <button> Like </button>
      {props.like}
    </div>
  );
};
export default Post;
