import React from "react";
import { NavLink } from "react-router-dom";
import { pushDialogsMessageActionCreator, updateOnChangeDialogsActionCreator } from "../../redux/state";
import c from "./Dialogs.module.css";

const DialogsItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={c.oneDialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={c.message}> {props.message}</div>;
};

const Dialogs = (props) => {
  let dial = props.state.dialogsDate.map((d) => {
    return <DialogsItem name={d.name} id={d.id} />;
  });
  let mess = props.state.messageDate.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let perepiska = () => {
    // let text = newMessageElement.current.value;
    // alert(text);
    props. dispatch(pushDialogsMessageActionCreator())
    // pushDialogsMessage();
    // props.state.hyi = "";
    // newMessageElement.current.value = "";
  };

  let onChangeDialogs = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateOnChangeDialogsActionCreator(text))
    // updateOnChangeDialogs(text);
  };

  return (
    <div>
      <h1>Dialogs</h1>
      <div className={c.dialogs}>
        <div className={c.dialogsItem}>{dial}</div>
        <div className={c.messages}>
          {mess}
          <textarea
            onChange={onChangeDialogs}
            ref={newMessageElement}
            value={props.state.date}
          ></textarea>
          <button
            onClick={perepiska}
            // value={props.state.hyi}
          >
            {/* {" "} */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
//
//
//
{
  /* <DialogsItem name={dialogsDate[0].name} id={dialogsDate[0].id} />
          <DialogsItem name={dialogsDate[1].name} id={dialogsDate[1].id} />
          <DialogsItem name={dialogsDate[2].name} id={dialogsDate[2].id} />
          <DialogsItem name={dialogsDate[3].name} id={dialogsDate[3].id} /> */
}
{
  /*  */
}
{
  /* <DialogsItem name="Anna" id="1" /> */
}
//
//
//
{
  /* <Message message={messageDate[0].message} />
          <Message message={messageDate[1].message} />
          <Message message={messageDate[2].message} />
          <Message message={messageDate[3].message} /> */
}
{
  /*  */
}
{
  /* <Message message="Hello" /> */
}