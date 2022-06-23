import { callAxios } from './../plugins/call.axios';
export const getUserAddress = async () => {
    const IPTOKEN = process.env.NEXT_PUBLIC_IP_TOKEN
    const res =  await callAxios({
        url: `https://ipinfo.io/110.44.125.173?token=${IPTOKEN}`,
        method: "GET"
    })
    if (res.status === 200 && res.data) {
        return res.data
    } else {
        return {}
    }
}