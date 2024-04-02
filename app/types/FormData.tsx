import { Period } from "lastfm-njs"

export type FormDataType = {
    user: string,
    period: Period,
    width: number,
    height: number,
    albumNames: Boolean
}