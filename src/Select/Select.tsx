import React, {useState} from "react";
import styles from './Select.module.css'

export type ItemType ={
   title:string
    value :number
}

export type SelectPropsType ={
    value:number
  onChange:(value:any)=>void
    items:ItemType[]
}

export const Select=(props:SelectPropsType)=> {
    let [active,setActive] =useState(false)
   const changeSelect = props.items.find(i=>i.value === props.value)
    
const TogleItems =  () => setActive(!active)

    return (
<>

    <div className={styles.select }>

<span className={styles.main} onClick={TogleItems}>{changeSelect && changeSelect.title}</span>

                {active &&
                    <div className={styles.select}>
                        {props.items.map(i=>
                            <div key={i.value} onClick={()=>{props.onChange(i.value)
                                    TogleItems()
                                }}
                            > {i.title} </div>)}
                </div>}
            </div>
</>
    )
}

