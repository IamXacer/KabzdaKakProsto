import React, {useState} from "react";
import {Rating} from "./Rating";
import {UncontrolRating} from "./UncontrolRating";
import {action} from "@storybook/addon-actions";

export default {
    title:'UncontrolRating',
    component:UncontrolRating
}
const callback= action('rating changed')

export const EmptyRating = () => <UncontrolRating defaltValue ={0}/>
export const Rating1 = () => <UncontrolRating defaltValue ={1} />
export const Rating2 = () => <UncontrolRating defaltValue ={2}/>
export const Rating3 = () => <UncontrolRating defaltValue ={3} />
export const Rating4 = () => <UncontrolRating defaltValue ={4} />
export const Rating5 = () => <UncontrolRating defaltValue ={5} />