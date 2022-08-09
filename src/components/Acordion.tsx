import React from "react";
type PropsAccordion={
    title:string
    collapsed:boolean
    onChange:()=>void
   /* setCollapsed:( collapsed:boolean)=>void*/
}

function Accordion(props:PropsAccordion) {
    return (
        <div>
            <AccordionTitle title={props.title}
            onChange={props.onChange}
            />

            {!props.collapsed && <AccordionBody/>}
        </div>
    )

}

type PropsAccordionTitle={
    title:string
    onChange:()=>void

}

function AccordionTitle(props:PropsAccordionTitle) {
    return (
        <div ><h3 onClick={props.onChange}></h3></div>)}

type AccordionBodyType ={
    collapsed :boolean
}
function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>)}

export default Accordion