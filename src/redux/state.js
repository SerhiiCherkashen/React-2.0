// import { cloneElement } from "react";

import messageReduce from "./message-reduce "
import profileReduce from "./profile-reduce"
import testSkillReduce from "./testSkill-reduce "
import trevirovkaReduce from "./trenirovka-reduce "

const UPDATE_ON_CHANGE_DIALOGS = "UPDATE-ON-CHANGE-DIALOGS"
const PUSH_DIALOGS_MESSAGE = "PUSH-DIALOGS-MESSAGE"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const PUSH_POST = "PUSH-POST"
const PUSH_TEXT_SKILL = "PUSH-TEXT-SKILL"
const CHANGE_TEST_SKILL = "CHANGE-TEST-SKILL"
const PUSH_TRENIROVKA = "PUSH-TRENIROVKA"

let store = {
  _state: {
    profilePage: {
      posts: [
        { name: "Ivannnnnnn", message: "Hello World!!!", like: 15 },
        { name: "Sashaaaaaa", message: "Hoy are you?!!!", like: 29 },
        { name: "Marinaaaaa", message: "Good morning Vietnam!!!", like: 1488 },
        {
          name: "Nastaaaaaa",
          message: "I like beer !!!",
          like: 1348755293,
        },
      ],
      newPostText: "Mercedes-Benz  AMG 6.3 compresor ",
    },
    messagePage: {
      dialogsDate: [
        { id: 1, name: "Anna" },
        { id: 2, name: "Dima" },
        { id: 3, name: "Natasha" },
        { id: 4, name: "Mikola" },
      ],
      messageDate: [
        { id: 1, message: "YO" },
        { id: 2, message: "Hello world!!!" },
        { id: 3, message: "hello" },
        { id: 4, message: "My name is Mikola" },
      ],
      date: "",
    },
    trenirovkaPage: {

      names: [
        { name: 'Inga' },
        { name: 'Dima' },
        { name: 'Nikita' },
        { name: 'Dasha' },
      ],
      messages: [
        { id: 1, message: "I like home" },
        { id: 1, message: "I like bus" },
        { id: 1, message: "I like jem" },
        { id: 1, message: "I like car" },
      ],
      sportText: ""

    },
    testSkillPage: {
      names: [
        { id: 1, name: "Denis" },
        { id: 2, name: "Vita" },
        { id: 3, name: "Anton" },
        { id: 4, name: "Lena" },
      ],
      messages: [
        { id: 1, message: "Hai" },
        { id: 2, message: "Hello" },
        { id: 3, message: "Bai" },
        { id: 4, message: "Poka" },
      ],
      textValue: " "
    }
    // sadebar: {
    //   img: [
    //     <img src=" https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png" />,
    //     <img src="  https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Pic.png" />,
    //     <img src=" https://sunmag.me/wp-content/uploads/2019/11/sunmag-002-small-avatar.png" />,
    //   ],
    // },
  },
  getState() {
    console.log("GETSTATE  GOOD")
    return this._state;
  },
  subscriber(observer) {
    this._callSubscriber = observer;
  },
  _callSubscriber() {
    console.log("Hello");
  },
  dispatch(action) {

    profileReduce(this._state.profilePage, action)
    messageReduce(this._state.messagePage, action)
    testSkillReduce(this._state.testSkillPage, action)
    trevirovkaReduce(this._state.trenirovkaPage, action)

    this._callSubscriber(this._state);

    // if (action.type === PUSH_POST) {
    //   let newPost = {
    //     id: 5,
    //     message: this._state.profilePage.newPostText,
    //     like: 0,
    //   };
    //   this._state.profilePage.posts.push(newPost);
    //   this._state.profilePage.newPostText = "";
    //   this._callSubscriber(this._state);
    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //   this._state.profilePage.newPostText = action.newText;
    //   this._callSubscriber(this._state);
    // } else if (action.type === PUSH_DIALOGS_MESSAGE) {
    //   let newMessage = {
    //     id: 5,
    //     message: this._state.messagePage.date,
    //   };
    //   this._state.messagePage.messageDate.push(newMessage);
    //   this._state.messagePage.date = "";
    //   this._callSubscriber(this._state);
    // } else if (action.type === UPDATE_ON_CHANGE_DIALOGS) {
    //   this._state.messagePage.date = action.literMessage;
    //   this._callSubscriber(this._state);
    // } else if (action.type === PUSH_TEXT_SKILL) {
    //   let newPost = {
    //     id: 5,
    //     message: this._state.testSkillPage.newPost
    //   }
    //   this._state.testSkillPage.messages.push(newPost)
    //   this._state.testSkillPage.newPost = ""
    //   this._callSubscriber(this._state)
    //   console.log("newPost = " + this._state.testSkillPage.newPost)
    // } else if (action.type === CHANGE_TEST_SKILL) {
    //   this._state.testSkillPage.newPost = action.mes
    //   this._callSubscriber(this._state)
    //   console.log("newPost = " + this._state.testSkillPage.newPost)
    // } else if (action.type === PUSH_TRENIROVKA) {
    //   // pushTrenirovka()

    //   let newPost = {
    //     id: 5,
    //     message: action.pin
    //   }
    //   this._state.trenirovkaPage.messages.push(newPost)

    //   this._callSubscriber(this._state)
    // }
  },
}


// window.state = store;
export default store;

//
//
//
//
//
// import { cloneElement } from "react";
// window.state = state;

// let state = {
// profilePage: {
//   posts: [
//     { name: "Ivannnnnnn", message: "Hello World!!!", like: 15 },
//     { name: "Sashaaaaaa", message: "Hoy are you?!!!", like: 29 },
//     { name: "Marinaaaaa", message: "Good morning Vietnam!!!", like: 1488 },
//     {
//       name: "Nastaaaaaa",
//       message: "I like Dick druk druk!!!",
//       like: 1348755293,
//     },
//   ],
//   newPostText: "Mercedes-Benz  AMG 6.3 compresor ",
// },
// messagePage: {
//   dialogsDate: [
// { id: 1, name: "Anna" },
//       { id: 2, name: "Dima" },
//       { id: 3, name: "Natasha" },
//       { id: 4, name: "Mikola" },
//     ],
//     messageDate: [
//       { id: 1, message: "YO" },
//       { id: 2, message: "Hello world!!!" },
//       { id: 3, message: "hello" },
//       { id: 4, message: "My name is Mikola" },
//     ],
//     date: "",
//   },
//   sadebar: {
//     img: [
//       <img src=" https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png" />,
//       <img src="  https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Pic.png" />,
//       <img src=" https://sunmag.me/wp-content/uploads/2019/11/sunmag-002-small-avatar.png" />,
//     ],
//   },
// },
// getState() {
//   return this._state;
// },
// _callSubscriber() {
//   console.log("Hello !!!");
// },
// pushPost() {
//   let newPost = {
//     id: 5,
//     message: store._state.profilePage.newPostText,
//     like: 0,
//   };
//   this._state.profilePage.posts.push(newPost);
//   this._state.profilePage.newPostText = "";
//   this._callSubscriber(this._state);
// },
// updateNewPostText(newText) {
//   this._state.profilePage.newPostText = newText;
//   this._callSubscriber(this._state);
// },
// pushDialogsMessage() {
//   let newMessage = {
//     id: 5,
//     message: this._state.messagePage.date,
//   };
//   this._state.messagePage.messageDate.push(newMessage);
//   this._state.messagePage.date = "";
//   this._callSubscriber(this._state);
// },
// updateOnChangeDialogs(literMessage) {
//   this._state.messagePage.date = literMessage;
//   this._callSubscriber(this._state);
// },
// subscriber(observer) {
//   this._callSubscriber = observer;
// },
// };

// export default store;

//
//
//
//____________________________Before OOP________________________
//
//
// import { cloneElement } from "react";
// let rerenderEntireTree = () => {
// debugger;
// console.log("Hello !!!");
// };
// let state = {
//   profilePage: {
//     posts: [
//       { name: "Ivannnnnnn", message: "Hello World!!!", like: 15 },
//       { name: "Sashaaaaaa", message: "Hoy are you?!!!", like: 29 },
//       { name: "Marinaaaaa", message: "Good morning Vietnam!!!", like: 1488 },
//       {
//         name: "Nastaaaaaa",
//       message: "I like Dick druk druk!!!",
//       like: 1348755293,
//     },
//   ],
//   newPostText: "Mercedes-Benz  AMG 6.3 compresor ",
// },
// messagePage: {
//   dialogsDate: [
//     { id: 1, name: "Anna" },
//     { id: 2, name: "Dima" },
//     { id: 3, name: "Natasha" },
//     { id: 4, name: "Mikola" },
//   ],
//   messageDate: [
//     { id: 1, message: "YO" },
//     { id: 2, message: "Hello world!!!" },
//       { id: 3, message: "hello" },
//       { id: 4, message: "My name is Mikola" },
//     ],
//     date: "",
//   },
//   sadebar: {
//     img: [
//       <img src=" https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png" />,
//       <img src="  https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Pic.png" />,
//       <img src=" https://sunmag.me/wp-content/uploads/2019/11/sunmag-002-small-avatar.png" />,
//     ],
//   },
// };
// export const pushPost = () => {
//   let newPost = {
//     id: 5,
//     message: state.profilePage.newPostText,
//     like: 0,
//   };
//   state.profilePage.posts.push(newPost);
//   state.profilePage.newPostText = "";
//   rerenderEntireTree(state);
//   debugger;
// };
// export const updateNewPostText = (newText) => {
//   state.profilePage.newPostText = newText;
//   rerenderEntireTree(state);
//   debugger;
// };
// export const pushDialogsMessage = () => {
//   let newMessage = {
//     id: 5,
//     message: state.messagePage.date,
//   };
//   state.messagePage.messageDate.push(newMessage);
//   state.messagePage.date = "";
//   rerenderEntireTree(state);
// };
// export const updateOnChangeDialogs = (literMessage) => {
//   state.messagePage.date = literMessage;
//   rerenderEntireTree(state);
// };
// export const subscriber = (observer) => {
//   rerenderEntireTree = observer;
// };

// window.state = state;
// export default state;
