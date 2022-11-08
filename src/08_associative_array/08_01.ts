import React from "react";


export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}

type UserType = {
    [key: string]: {id: number, name: string}
}

export let users = {
    '101': {id: 101, name: 'Dimych'},
    '1212': {id: 1212, name: 'Natasha'},
    '462834': {id: 462834, name: 'Valera'},
    '3': {id: 3, name: 'Katya'}
}

var user = {id:100500, name: "Igor"}

// users[user.id] = user;
// delete users[user.id]
// users[user.id].name = 'Vitya'

export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 1212, name: 'Natasha'},
    {id: 462834, name: 'Valera'},
    {id: 3, name: 'Katya'}
]
// usersArray[3]
// usersArray.find(u => u.id ===1)
usersArray.push(user)
