import {makeHairStyle, moveUser, UserType, UserWithLapTopType} from "./10_01";



test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address:{
            city: 'Minsk'
        }
    }
    const awesomeUser = makeHairStyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address', () => {
    let user: UserWithLapTopType = {
        name: 'Dimych',
        hair: 32,
        address:{
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }
    const movedUser = moveUser(user, 'Kiev')


expect(user).not.toBe(movedUser)
expect(user.address).not.toBe(movedUser.address)
// @ts-ignore
    expect(user.laptop).toBe(movedUser.laptop)
expect(movedUser.address.city).toBe('Kiev')



})