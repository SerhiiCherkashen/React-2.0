import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfiImege from "./ProfiImege/ProfiImege";
// import c from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div>
      <div>
        <ProfiImege />
      </div>
      <div>
        <MyPosts
          posts={props.profilePage.posts}
          newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
          // updateNewPostText={props.updateNewPostText}
        />
      </div>
    </div>
  );
};
export default Profile;
