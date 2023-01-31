import React from "react";
import c from "./Friends.module.css";
import state from "../../redux/state";

const Frends = (props) => {
  return (
    <div>
      <div className={c.content}>
        <h1>Friends</h1>
      </div>
      <div className={c.foto}>{state.sadebar.img}</div>
    </div>
  );
};
export default Frends;
