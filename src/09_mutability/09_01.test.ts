import {users} from "../08_associative_array/08_01";

function increaseAge(user: UserType) {
    user.age++
}
type UserType = {
    name: string
    age: number
}

test('big reference test', () => {
    let user : UserType = {
        name: "Dimych",
        age: 32
    }
increaseAge(user)

    expect(user.age).toBe(33)

    const superMan = user
    superMan.age = 1000
    expect(user.age).toBe(1000)
})

test('array test', () => {
    let user = [{
        name: "Dimych",
        age: 32
    },{
        name: "Dimych",
        age: 32
    }]
    let admins = users

    // @ts-ignore
    admins.push({name: "Bandit", age: 10})

    expect(user[2]).toEqual({name: "Bandit", age: 10})

})

