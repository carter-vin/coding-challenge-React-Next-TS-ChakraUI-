import { callAxios } from './../plugins/call.axios';
export const getNeighbourLocation = async (longitude:number, latitude: number) => {
    const res =  await callAxios({
        url: `api/neighbor_location?longitude=${longitude}&latitude=${latitude}`,
        method: "GET",
    })
    console.log('the response', res)
    return JSON.stringify(res)
    // if (res.status === 200 && res.data) {
    //     return res.data.records
    // } else {
    //     return []pu
    // }
}