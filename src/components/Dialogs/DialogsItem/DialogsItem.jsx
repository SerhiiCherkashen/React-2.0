import React from "react";
import { NavLink } from "react-router-dom";
import c from "./../Dialogs.module.css";

const DialogsItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={c.oneDialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogsItem;
