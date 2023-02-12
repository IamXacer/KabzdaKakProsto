import React from "react";
type PropsAccordion={
    title:string
    collapsed:boolean
    onChange:()=>void
   items:string[]
   /* setCollapsed:( collapsed:boolean)=>void*/
}
function Accordion(props:PropsAccordion) {
    return (
        <div>
            <AccordionTitle title={props.title}
            onChange={props.onChange}
            />{!props.collapsed && <AccordionBody items={props.items} />}
        </div>)}

type PropsAccordionTitle={
    title:string
    onChange:()=>void

}

function AccordionTitle(props:PropsAccordionTitle) {
    return (
        <div ><h3 onClick={props.onChange}></h3></div>)}

type AccordionBodyType ={
    items:string[]
}
function AccordionBody(props:AccordionBodyType) {
    return (
        <ul>
            {props.items.map((i,index)=>
                <li key={index}>{i}</li>)}
        </ul>)}

export default Accordion