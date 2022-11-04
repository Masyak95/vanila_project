import {creatingGreetingMessage, ManType} from "./05_01";

let people: ManType[] = [

]

beforeEach(()=>{
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Alexander Petrov", age: 18},
        {name: "Artak Manukyan", age: 38}
    ]
})

test ("should get array of greeting messages", ()=> {
    const messages = creatingGreetingMessage(people)
    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello Andrew, Welcome to home"),
    expect(messages[1]).toBe("Hello Alexander, Welcome to home"),
    expect(messages[2]).toBe("Hello Artak, Welcome to home")
})