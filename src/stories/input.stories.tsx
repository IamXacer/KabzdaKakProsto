import React, {ChangeEvent, useRef, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;


export default {
    title: 'Input'
}

export const UncontroledInput = () => <input />
export const TrackValueUncontroledInput = () => {
    const [value,setValue] = useState('')
    const onChange =(e:ChangeEvent<HTMLInputElement>)=>{
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }

   return  <><input onChange={ onChange }/>{value}</>
}

export const ControledInputWithFixedValue = () => <input value={'it-incubator.by'} />

export const GetValueUncontroledInputByButtonPress = () => {
  const [value,setValue] = useState('')
const  inputRef = useRef<HTMLInputElement>(null)

    const save  = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return  <><input ref={inputRef} /><button onClick={save}>save</button>actual value{value}</>
}


