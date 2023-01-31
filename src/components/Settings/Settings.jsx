import React from "react";
import c from "./Settings.module.css";
import { NavLink } from "react-router-dom";

let itemDate = [
  { id: 1, name: "Sony" },
  { id: 2, name: "Roma" },
  { id: 3, name: "Ira" },
  { id: 4, name: "Denis" },
];
let messageDate = [
  { message: "Hello" },
  { message: "I love you" },
  { message: "I like city" },
  { message: "English " },
];
const Items = (props) => {
  return (
    <div>
      <NavLink to="/music">{props.name}</NavLink>
    </div>
  );
};
const Messags = (props) => {
  return <div>{props.message}</div>;
};

const Settings = () => {
  let mapitems = itemDate.map((i) => {
    return <Items name={i.name} />;
  });
  let mapmess = messageDate.map((m) => {
    return <Messags message={m.message} />;
  });
  return (
    <div>
      <h1>Settings</h1>
      <div className={c.asics}>
        <div>{mapitems}</div>
        <div>{mapmess}</div>
      </div>
    </div>
  );
};
export default Settings;
