import React, {useState} from "react";
import Accordion from "./Acordion";
import {action} from "@storybook/addon-actions";
import {UncontrolAccordion} from "./UncontrollsAcordion";

export default {
    title: 'UncontrolAccordion',
    component: UncontrolAccordion,
}

const callback = action('accordion mode change event fired')
const OnClickCallback = action('some item was be cliked')

export const MenuCollapsedMode = () =>
    <UncontrolAccordion title={'Menu'} collapsed={true}
                        items={[{title: 'Dimitch', value: 1}, {title: 'Viktor', value: 2},
                            {title: 'Andre', value: 3}]}
                        onChange={callback}
onClick={OnClickCallback}
    />
export const UsersCollapsedMode = () =>
    <UncontrolAccordion title={'Users'}
                        collapsed={false} items={[]}
                        onChange={callback}
                        onClick={OnClickCallback}/>


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <UncontrolAccordion title={'Users'}
                               items={[{title: 'Dimitch', value: 1}, {title: 'Viktor', value: 2}, {
                                   title: 'Andre',
                                   value: 3
                               }]}
                               collapsed={true} onChange={() => setValue(!value)}
                               onClick={OnClickCallback}
    />
}


/*
const [value,SetValue] =useState<boolean>(true)*/
