import React, {useState} from 'react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";
import {UncontroledOnOff} from "./UncontroledOnOff";

export default {
    title:'UncontroledOnOff',
    component:UncontroledOnOff,
}

const callback = action('on or off clicked')

export const OnMode = () => <UncontroledOnOff defaultValue={true} onChange={callback}/>
export const OffMode = () => <UncontroledOnOff defaultValue={false} onChange={callback}/>
export const DefaultInputValue = () => <input defaultValue={'yo'} />

export const ModdeChanging = () => {
  const [value,setValue] = useState<boolean>(true)
    return <OnOff on={value} onChange={setValue}/>
}




