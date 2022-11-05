import React from "react";

export type ManType = {
    name: string
    age: number
}

const people: ManType[] = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexandr Petrov", age: 18},
    {name: "Artak Manukyan", age: 38},
]
const mariaTransformator = (man: ManType) => {
    return {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1]
    }
}

const devs = [
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Andrew", lastName: "Ivanov"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Alexander", lastName: "Petrov"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Artak", lastName: "Manukyan"
    },

]


let d1 = mariaTransformator(people[0])
let d2 = mariaTransformator(people[1])
let d3 = mariaTransformator(people[2])


const dev2 = [
    d1, d2, d3
]
const dev3 = people.map(mariaTransformator)
const dev4 = people.map(man => ({
    stack: ["css, html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
}))


const messages = people.map(man => `Hello ${man.name.split(" ")[0]}, Welcome to home`)

export const creatingGreetingMessage = (people: ManType[])=>{
    return people.map(man => `Hello ${man.name.split(" ")[0]}, Welcome to home`)
}

