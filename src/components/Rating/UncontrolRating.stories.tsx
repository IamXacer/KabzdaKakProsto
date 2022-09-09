import React, {ChangeEvent, useRef, useState} from "react";
import {Rating} from "./Rating";
import {UncontrolRating} from "./UncontrolRating";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolRating',
    component: UncontrolRating
}
const callback = action('rating changed')

export const EmptyRating = () => <UncontrolRating defaltValue={0} onChange={callback}/>
export const Rating1 = () => <UncontrolRating defaltValue={1} onChange={callback}/>
export const Rating2 = () => <UncontrolRating defaltValue={2} onChange={callback}/>
export const Rating3 = () => <UncontrolRating defaltValue={3} onChange={callback}/>
export const Rating4 = () => <UncontrolRating defaltValue={4} onChange={callback}/>
export const Rating5 = () => <UncontrolRating defaltValue={5} onChange={callback}/>


export const UncontroledInput = () => <input/>
export const TrackValueUncontroledInput = () => {
    const [value, setValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }

    return <> <input value={value} onChange={onChange}/> {value} </>
}

export const GetValueUncontroledInputByButtonPress = () => {
    const [value, setValue] = useState('')
 const  inputref = useRef<HTMLInputElement>(null)

    const save = () =>{
        const el = inputref.current as HTMLInputElement
        setValue(el.value)
    }

    return <> <input ref={inputref} /> <button onClick={save}>save</button> {value} </>
}


export const ControledInput = () => {
    const [parenValue, setParentValue] = useState('')

const onChange = (e:ChangeEvent<HTMLInputElement>)=> {
        setParentValue (e.currentTarget.value)}

  return <input value={parenValue}
                onChange={onChange}/>
}

export const ControledCheckBox = () => {
    const [parenValue, setParentValue] = useState(true)

    const onChange = (e:ChangeEvent<HTMLInputElement>)=> {
        setParentValue (e.currentTarget.checked)}

    return <input type='checkbox' checked={parenValue}
                  onChange={onChange}/>
}

export const ControledSelect = () => {
    const [selectValue, SetselectValue] = useState<string|undefined>(undefined)

    const onChange = (e:ChangeEvent<HTMLSelectElement>)=> {
        SetselectValue (e.currentTarget.value)}

    return <select value={selectValue} onChange={onChange}>
        <option> none </option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moskow</option>
        <option value={'3'}>Kiev</option>


    </select>
}
export const ControledIntutWithFixedValue = () => <input value={'it-incubator'}/>
