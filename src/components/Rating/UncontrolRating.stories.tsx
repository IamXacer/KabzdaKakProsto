import React, {useState} from "react";
import {Rating} from "./Rating";
import {UncontrolRating} from "./UncontrolRating";
import {action} from "@storybook/addon-actions";

export default {
    title:'UncontrolRating',
    component:UncontrolRating
}
const callback= action('rating changed')

export const EmptyRating = () => <UncontrolRating defaltValue ={0} onChange={callback}/>
export const Rating1 = () => <UncontrolRating defaltValue ={1} onChange={callback}/>
export const Rating2 = () => <UncontrolRating defaltValue ={2} onChange={callback}/>
export const Rating3 = () => <UncontrolRating defaltValue ={3}  onChange={callback}/>
export const Rating4 = () => <UncontrolRating defaltValue ={4} onChange={callback}/>
export const Rating5 = () => <UncontrolRating defaltValue ={5} onChange={callback}/>