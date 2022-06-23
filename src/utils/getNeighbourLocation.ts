import { callAxios } from './../plugins/call.axios';

export const getNeighbourLocation = async ({ longitude, latitude }: {longitude: number, latitude: number}) => {
    const res =  await callAxios({
        url: `http://localhost:3000/api/neighbor_location?longitude=${longitude}&latitude=${latitude}`,
        method: "GET",
    })
    console.log('the response', res)
    if (res.status === 200 && res.data) {
        return JSON.stringify(res)
    } else {
        return []
    }
}