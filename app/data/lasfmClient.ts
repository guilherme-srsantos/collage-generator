import { cli } from "@remix-run/dev";
import LastFm from "lastfm-njs";
import { Input } from "postcss";
import { FormDataType } from "~/types/FormData";



const getData = async (input: FormDataType): Promise<any> => {

    const client = new LastFm( {
        apiKey: process.env.API_KEY,
        apiSecret: process.env.API_SECRET,
        username: input.user
    })

    const response = await client.user_getTopAlbums( {
        period: input.period,
        limit: input.height * input.width,
        username: input.user,
        user: input.user
    })

    return response.
    
}

