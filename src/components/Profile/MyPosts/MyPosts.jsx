import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";
import { pushPostActionCreator ,updateNewPostTextActionCreator  } from "../../../redux/state";

const MyPosts = (props) => {
  let mapPosts = props.posts.map((el) => {
    return <Post message={el.message} like={el.like} name={el.name} />;
  });

  let newPostElement = React.createRef();

  let addPost = () => {
    // let text = newPostElement.current.value;
    props.dispatch(pushPostActionCreator());
    // props.updateNewPostText("");
  };
 
  let onPostChange = () => {
    debugger
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text))
    debugger
    // updateNewPostText(text);
  };

  return (
    <div>
      <textarea
        onChange={onPostChange}
        ref={newPostElement}
        value={props.newPostText}
      />

      <button onClick={addPost} />
      {mapPosts}
    </div>
  );
};
export default MyPosts;

{
  /* <Post
        message={posts[0].message}
        like={posts[0].like}
        name={posts[0].name}
      />
      <Post
        message={posts[1].message}
        like={posts[1].like}
        name={posts[1].name}
      /> */
}
{
  /* <Post
        message={posts[2].message}
        like={posts[2].like}
        name={posts[2].name}
      />
      <Post
        message={posts[3].message}
        like={posts[3].like}
        name={posts[3].name}
      /> */
}
{
  /* <Post messege="Hello World!!!" like="15" name="Ivan" />
      <Post messege="Hoy are you?!!!" like="29" name="Sasha" />
      <Post messege=" Good morning Vietnam!!!" like="1488" name="Marina" />
      <Post messege="I like Dick druk druk!!!" like="82341842" name="Nasta" /> */
}
