import React, { useState } from 'react';

type PropsType = {
    on?: boolean
    onChange: (on: boolean) => void
    defaultValue?: boolean
}

export const UncontroledOnOff = (props: PropsType) => {
    let [on, setOn] = useState(props.defaultValue ? props.defaultValue : false)

    const onStyle = {
        width: '20px',
        height: '20px',
        border: '1px solid black',
        background: on ? 'green' : 'white' // используем локальное состояние `on`
    }

    const offStyle = {
        width: '20px',
        height: '20px',
        border: '1px solid black',
        background: on ? 'white' : 'red' // используем локальное состояние `on`
    }

    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '4px',
        border: '1px solid black',
        background: on ? "green" : 'red' // используем локальное состояние `on`
    }

    const onClicked = () => {
        setOn(false); // изменяем локальное состояние
        props.onChange(true);
    }

    const offClicked = () => {
        setOn(true); // изменяем локальное состояние
        props.onChange(true);
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
