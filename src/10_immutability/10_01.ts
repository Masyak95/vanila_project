

export type UserType = {
    name: string
    hair: number
    address: {city: string, house?: number}
}

export type LapTopType = {
    title: string
}

export type UserWithLapTopType = UserType & {
    laptop: LapTopType
}

export function makeHairStyle(u: UserType, power:number) {
    const copy = {
        ...u,
        // hair: u.hair/power
    }
    //copy.hair = u.hair / power
    return copy
}
export function moveUser(u: UserType, city:string) {
    const copy = {
        ...u,
    }
    copy.address = {...copy.address,
    city: city}
    return copy
}
