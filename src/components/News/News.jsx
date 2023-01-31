import React from "react";
import { NavLink } from "react-router-dom";
import c from "./News.module.css";

let itemsArray = [
  { id: 1, name: "Igor" },
  { id: 2, name: "Ola" },
  { id: 3, name: "Anton" },
  { id: 4, name: "Lena" },
];
let messageItems = [
  { message: "Yo" },
  { message: "Hello" },
  { message: "Good morning" },
  { message: "Hai" },
];

const NewsItem = (props) => {
  let path = "/news/ " + props.id;
  return (
    <div>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const MessageItem = (props) => {
  return <div>{props.message}</div>;
};

const News = () => {
  return (
    <div>
      <h1>News</h1>
      <h1>Hai</h1>
      <div className={c.items}>
        <div>
          <NewsItem name={itemsArray[0].name} id={itemsArray[0].id} />
          <NewsItem name={itemsArray[1].name} id={itemsArray[1].id} />
          <NewsItem name={itemsArray[2].name} id={itemsArray[2].id} />
          <NewsItem name={itemsArray[3].name} id={itemsArray[3].id} />
        </div>
        <div>
          <MessageItem message={messageItems[0].message} />
          <MessageItem message={messageItems[1].message} />
          <MessageItem message={messageItems[2].message} />
          <MessageItem message={messageItems[3].message} />
        </div>
      </div>
    </div>
  );
  debugger;
};
export default News;
