import React from "react";

export type RatingProps ={
    value: 0|1|2|3|4|5
    onClick:(value: 0|1|2|3|4|5)=>void
}

export function Rating(props:RatingProps) {
    return (
        <div>

            <Star selected={props.value >0} onClick={props.onClick} value={1}/>
            <Star selected={props.value >1}  onClick={props.onClick} value={2}/>
            <Star selected={props.value >2}  onClick={props.onClick} value={3}/>
            <Star selected={props.value >3}  onClick={props.onClick} value={4}/>
            <Star selected={props.value >4}  onClick={props.onClick} value={5}/>
        </div>
    )



type PropsType ={
    selected:boolean
    value: 1|2|3|4|5
    onClick:(value: 1|2|3|4|5)=>void
}
        function Star(props: PropsType) {
        return  <span onClick={()=>{props.onClick(props.value)}}> {props.selected ? <b>star </b>: 'star '}</span>
          /*  if (props.selected === true) {
                return <span><b>star </b> </span>
            } else {
                return <span><>star </> </span>
            }*/

        }
    }