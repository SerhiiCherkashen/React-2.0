// import state, {
//   pushPost,
//   updateNewPostText,
//   pushDialogsMessage,
//   updateOnChangeDialogs,
//   subscriber,
// } from "./redux/state";
// import "./index.css";
import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/state";

let root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderEntireTree = (state) => {

  root.render(
    <React.StrictMode>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
      // updateNewPostText={store.updateNewPostText.bind(store)}
      // pushDialogsMessage={store.pushDialogsMessage.bind(store)}
      // updateOnChangeDialogs={store.updateOnChangeDialogs.bind(store)}
      />
    </React.StrictMode>
  );
  console.log("Good")
};
rerenderEntireTree(store.getState());

store.subscriber(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//
//
//
//
//
//
//
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import store from "./redux/state";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// let rerenderEntireTree = (state) => {
//   root.render(
//     <React.StrictMode>
//       <App
//         state={state}
//         pushPost={store.pushPost.bind(store)}
//         updateNewPostText={store.updateNewPostText.bind(store)}
// pushDialogsMessage={store.pushDialogsMessage.bind(store)}
//         updateOnChangeDialogs={store.updateOnChangeDialogs.bind(store)}
//       />
//     </React.StrictMode>
//   );
// };
// rerenderEntireTree(store.getState());

// store.subscriber(rerenderEntireTree);
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
