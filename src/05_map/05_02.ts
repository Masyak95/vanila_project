import {GovernmentBuildingsType, HouseType} from "../02_objects/02_02";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: GovernmentBuildingsType[]) => {
    return buildings.map( b => b.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: HouseType[]) => {
    return houses.map( b => b.address.street.title)
}

export function createMessages(houses: HouseType[]) {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}