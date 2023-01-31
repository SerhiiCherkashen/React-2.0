import React from "react";
import c from "./Trenirovka.module.css";
import { NavLink } from "react-router-dom";
import { pushTrenirovka } from "../../redux/state";




const Imena = (props) => {
  let path = "/testSkill"
  return (
    <div>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Text = (props) => {
  return <div>{props.message}</div>;
};



const Trenirovka = (props) => {

  let rcr =React.createRef()

let arrayNames= props.page.names.map(el=>{
        return   <Imena name={el.name} />
    }) 
let arrayText = props.page.messages.map(m=>{
         return <Text  message={m.message} />
    })
    let clickFN=()=>{
      let text = rcr.current.value
    props.dispatch(pushTrenirovka(text))
    debugger
    // text = ""
    rcr.current.value = ""
    debugger
    }


  return (
    <div>
      <h1>Trenirovka</h1>
      <div className={c.items}>
        <div>
          {arrayNames}
          {/* {props.page.names[0].name} */}
          {/* <Imena name={"Inga"} id={1} />
          <Imena name={"Ola"} id={1} />
          <Imena name={"Nasta"} id={1} />
          <Imena name={"iana"} id={1} /> */}
        </div>
        <div>
          {arrayText}
          <textarea 
          ref={rcr}
        
          // onChange={changeFN}

          />
          <button 
          onClick={clickFN}
          />
        </div>
      </div>
    </div>
  );
};

export default Trenirovka;
