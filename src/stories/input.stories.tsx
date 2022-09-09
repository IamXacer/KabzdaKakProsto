import React, {ChangeEvent, useRef, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;


export default {
    title: 'input'
}

export const UncontroledInput = () => <input />
export const TrackValueUncontroledInput = () =>{
   const [value,setValue] = useState('')
   return <> <input onChange={(e:ChangeEvent<HTMLInputElement>)=>{
      const actualValue = e.currentTarget.value
       setValue(actualValue)
   }
   } /> {value} </>
}

export const GetValueUncontroledInputByButtonPress = () =>{
    const [value,setValue] = useState('')
    return <> <input /><button/> {value} </>
}


export const ControledIntutWithFixedValue = () => <input value={'it-incubator'} />
