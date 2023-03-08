import {HTTPError} from "@/errors/error-types"
export const fetchData = async (url: string) => {
   try {
        const data = await fetch(url).then((response) => {
            if(!response) {
                throw new Error (`Uh oh, the request to ${url}, failed and returned undefined!`)
            }
            if(response?.status !== 200  ) {
                throw new HTTPError(response.status, response.statusText, response.body)
            } 

            return response?.json()
        }).then((json) => {
            console.log(json)
            return json;
        })

        console.log("fetchData", data)
        return data;
   } catch (error) {
        console.error(error)
   }
}