import React, {useReducer, useRef, useState} from "react";


type ItemType ={
    title:string
    value:any
}

type PropsAccordion={
    title:string
    collapsed:boolean
    items:ItemType[]
    onChange:()=>void
    onClick:(value:any)=>void
}
type PropsAccordionTitle={
    title:string
    onChanges:()=>void
}

type ActionType ={
    type:string
}

const reducer = (state:boolean,action:ActionType) => {
    debugger
    if (action.type === 'TOGGLE-COLLAPSED'){
        return !state
    }
    return state
}

export function UncontrolAccordion(props:PropsAccordion) {
   /* let [collapsed,setCollapsed] =useState(false)*/
    let [collapsed,dispatch] =useReducer(reducer,false)
    return (
        <div  >

           {/* <AccordionTitle title={props.title} onChanges={()=>{dispatch() setCollapsed(!collapsed)}} />*/}
            <AccordionTitle title={props.title} onChanges={()=>{
                debugger
                dispatch({type:'TOGGLE-COLLAPSED'}) }} />
            {!collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>)}

function AccordionTitle(props:PropsAccordionTitle) {
    return (<div ><h3 onClick={()=>{props.onChanges()}}>{props.title}</h3></div>)}


export type AccordionBodyType = {
    items:ItemType[]
    onClick:(value:any)=>void
}

function AccordionBody(props:AccordionBodyType) {
    return (
        <ul  >{props.items.map((i,index)=>
            <li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)}</ul>)}

