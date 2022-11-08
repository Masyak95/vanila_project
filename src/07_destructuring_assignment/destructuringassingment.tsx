import React, {useState} from "react";

export type ManType = {
    name: string
    age: number
    lessons: Array<{title: string}>
    address: {
        street: {
            title: string
        }
    }
}
type PropsType = {
    title: string
    man: ManType
    food: Array <string>
    car: {model: string}
}

function useMariasState(message: string) {
    // @ts-ignore
    return [m, function(){} ]
}
function useMariasState2(message: string) {

    return {
        // @ts-ignore
        message: m,
        setMessage: function(){}
}
}


export const ManComponent: React.FC<PropsType> = (props) => {
    const {title, man, ...restProps} = props
    // const {name} = props.man

   // @ts-ignore
    const {message, setMessage} = useMariasState("Hello")

    return<div>
        <h1>{props.title}</h1>
        <div>
            {props.car.model}
        </div>
    </div>
}




