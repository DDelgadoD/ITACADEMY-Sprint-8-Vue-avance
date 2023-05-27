export const base = "https://swapi.dev/api/"
export const endShips = "starships/"
export const format = "?format=json"

export const baseIMG = "https://starwars-visualguide.com/assets/img/"
export const formatIMG = ".jpg"

export async function getJSON(call) {
    console.log("API CALL: " + call)
    const raw = await fetch(call);
    const elementJSON = await raw.json()
    console.log("API Response:" +  JSON.stringify(elementJSON))
    return elementJSON
}

