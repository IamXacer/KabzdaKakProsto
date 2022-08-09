import React, {useState} from "react";
type PropsAccordion={
    title:string
    collapsed:boolean

}

function UncontrolAccordion(props:PropsAccordion) {
    let [collapsed,setCollapsed] =useState(false)
    return (
        <div  >
            <AccordionTitle title={props.title} onClick={()=>{setCollapsed(!collapsed)}} />
{/*<button onClick={()=>{setCollapsed(!collapsed)}}>TOGLEE</button>*/}
            {!collapsed && <AccordionBody/>}
        </div>
    )

}

type PropsAccordionTitle={
    title:string
    onClick:()=>void
}

function AccordionTitle(props:PropsAccordionTitle) {
    return (
        <div ><h3 onClick={()=>{props.onClick()}}>{props.title}</h3></div>)}


function AccordionBody() {
    return (
        <ul  >
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>)}

export default UncontrolAccordion