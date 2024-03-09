import React, {useState} from "react";
import styles from './Select.module.css'

export type ItemType = {
    title: string
    value: number
}

export type SelectPropsType = {
    value?: number
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {
    const [edit, setEdit] = useState(false)
    const [hoverElement, setHoverElement] = useState(props.value)
    const selectedItem = props.items.find(i => i.value === props.value)
    const hoverItem = props.items.find(i => i.value === hoverElement)
    const setEditHandler = () => {
        setEdit(!edit)
    }
    const onItemClick = (value: any) => {
        props.onChange(value)
        setEditHandler()
    }
    return (
        <><div className={styles.select} onClick={setEditHandler}>

                    <span className={styles.main}>
                        {selectedItem && selectedItem.title}
                    </span>
            {!edit && <div className={styles.items}>
                {props.items.map(i =>
                    <div className={`${styles.item} ${hoverItem === i ? styles.selected : ''}`} key={i.value}
                         onMouseEnter={() => {
                             setHoverElement(i.value)}}
                         onClick={() => onItemClick(i.value)}
                    >{i.title}</div>)}
            </div>
            }
        </div>
        </>
    )
}

