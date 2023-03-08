import { fetchData } from "../fetch"
import type { SwapiResourceResult, SwapiStarShip } from "./types"
// let fetchUrl = url;
// if (!url.startsWith("https://")) {
//     fetchUrl = "https://" + fetchUrl;
// }
const swapiStarshipsEndpoint = "https://swapi.dev/api/starships/"

export const fetchSwapiResource = async (url: string) => {
  if(!url.startsWith("https://swapi.dev/api")){
    throw new Error("Not a Swapi endpoint 😤");
  }

  return fetchData(url)
}

export const fetchAllStarships = async (): Promise<undefined | SwapiResourceResult<SwapiStarShip>> => {
  return fetchSwapiResource(swapiStarshipsEndpoint)
}

export const fetchStarshipsBySearch = async (searchText: string) => {
  const searchTerms = searchText
  const starshipData = await fetchSwapiResource(`${swapiStarshipsEndpoint}?search=${searchTerms}`)
  return starshipData
}