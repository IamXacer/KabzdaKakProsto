import React, {useState} from "react";
export type RatingType = 0|1|2|3|4|5

type RatingProps ={
    defaltValue?:RatingType
    onChange:(value:RatingType)=>void

}

export function UncontrolRating(props:RatingProps) {
    let [value,setValue] = useState<RatingType>
    (props.defaltValue ? props.defaltValue : 0)
    return (
        <div >
            < Star selected={value >0} setValue={setValue} value={1} />
            <Star selected={value >1} setValue={setValue} value={2}/>
            <Star selected={value >2} setValue={setValue} value={3}/>
            <Star selected={value >3} setValue={setValue} value={4}/>
            <Star selected={value >4} setValue={setValue} value={5}/>
        </div>
    )



type PropsType ={
    selected:boolean
    setValue:(value:RatingType)=>void
    value:RatingType
}
        function Star(props: PropsType) {
        return  <span onClick={()=>{props.setValue(props.value)}}>
            {props.selected ?<b>star </b>:<>star </>}
        </span>


        }
    }