import React from "react";
import { NavLink } from "react-router-dom";
import c from "./TestSkill.module.css"
import { pushTestSkill, changeTestSkill } from "../../redux/state";

let N = (props)=>{
    return(
        <div>
            <NavLink  to="/testSkill" >{props.name}</NavLink>
        </div>
    )
}
let M = (props)=>{
    return(
        <div>
            {props.message}
        </div>
    )
}


const TestSkill = (props)=>{

let refElement = React.createRef()

let aaa =props.page.names.map(e=>{
    return(
        <N name={e.name} />
    )
   }
 )
let bbb = props.page.messages.map(el=>{
    return (
        < M  message={el.message}  />
    )
})

let fnClick=()=>{ 
props.dispatch(pushTestSkill())
 
}
let fnChange = ()=>{
    let text =refElement.current.value 
      props.dispatch(changeTestSkill(text))
}
    return (
<div>
        <h1> TestSkill   </h1>
   <div className={c.content} >               
        <div className={c.names} >
            {aaa}
        </div>
        <div className={c.messages} >       
            {bbb}
             <textarea  onChange={fnChange}
             ref={refElement} 
             value={props.page.newPost} />
                <button onClick={fnClick} />
        </div>
    </div>
</div>
    )
}

export default TestSkill
