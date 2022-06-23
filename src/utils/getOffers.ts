import { callAxios } from './../plugins/call.axios';
export const getOffers = async () => {
    const res =  await callAxios({
        url: "https://api.airtable.com/v0/appDFOzemd24MG2CZ/sportsbooks",
        method: "GET",
        access_token: process.env.NEXT_PUBLIC_AIR_TABLE_TOKEN
    })
    if (res.status === 200 && res.data) {
        return res.data.records
    } else {
        return []
    }
}