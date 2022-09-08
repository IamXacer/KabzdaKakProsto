import React, {useState} from 'react';

type PropsType = {
  /*  on?:boolean*/
    onChange:( on:boolean)=>void
    defaultValue?:boolean
}

export const UncontroledOnOff = (props:PropsType) => {
let [on,setOn] =useState(props.defaultValue ? props.defaultValue:false)
    const onStyle =  {
        width: '20px',
            height: '20px',
        border: '1px solid black',
        background :on ?'white' :'green'
    }
    const offStyle = {
        width: '20px',
        height: '20px',
        border: '1px solid black',
        background : on ?'red':'white'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '4px',
        border: '1px solid black',
        background :on ?"red":'green'

    }
const onClicked = () => {
    setOn(false)
    props.onChange(false)
}
const OffClicked = () => {
    setOn(true)
    props.onChange(true)
}

    return (
        <div>
            <div style={onStyle} onClick={onClicked} >On</div>
            <div style={offStyle} onClick={OffClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

