import { callAxios } from './../plugins/call.axios';
export const getOffers = async () => {
    const res =  await callAxios({
        url: "https://api.airtable.com/v0/appDFOzemd24MG2CZ/sportsbooks",
        method: "GET",
        access_token: "keyv05VZXGSFfVKO4"
    })
    console.log('the response', res.data.records)
    if (res.status === 200 && res.data) {
        return res.data.records
    } else {
        return []
    }
}