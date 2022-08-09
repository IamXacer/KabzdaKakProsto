import React, {useState} from 'react';

type PropsType = {
    on:boolean
}

export const OnOff = (props:PropsType) => {
let [on,setOn] =useState(false)
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


    return (
        <div>
            <div style={onStyle} onClick={()=>(setOn(false))}>On</div>
            <div style={offStyle} onClick={()=>(setOn(true))}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

