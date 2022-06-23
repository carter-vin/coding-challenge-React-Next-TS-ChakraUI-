import { callAxios } from './../plugins/call.axios';
export const getUserAddress = async () => {
    const res =  await callAxios({
        url: " https://ipinfo.io/110.44.125.173?token=244f1474c9662a",
        method: "GET"
    })
    if (res.status === 200 && res.data) {
        return res.data
    } else {
        return {}
    }
}