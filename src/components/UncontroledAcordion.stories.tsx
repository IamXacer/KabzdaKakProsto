import React, {useState} from "react";
import Accordion from "./Acordion";
import {action} from "@storybook/addon-actions";
import { UncontrolAccordion } from "./UncontrollsAcordion";

export default {
    title:'UncontrolAccordion',
    comonent:UncontrolAccordion,
}

const callback = action('accordion mode change event fired')

/*export const  MenuCollapsedMode = ()=> <UncontrolAccordion title={'Menu'}  />
export const  UsersCollapsedMode = ()=> <UncontrolAccordion title={'Users'} />*/

export const ModeChanging = () => {

    return <UncontrolAccordion title={'Users'}/>
}


/*
const [value,SetValue] =useState<boolean>(true)*/
