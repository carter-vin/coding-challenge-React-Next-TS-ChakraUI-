import axios, { AxiosRequestConfig, Method } from 'axios'

interface CallAxiosAPI {
    url: string
    method: Method
    data?: any
    headers?: any
    params?: any
    isAuthentication?: boolean
    access_token?: string
}

export const callAxios = async <T>({ url, method, data, headers, params, access_token }: CallAxiosAPI) => {
    const config: AxiosRequestConfig<any> = {
        method: method || 'GET',
        url: `${url}`,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: access_token !== null ? `Bearer ${access_token}` : '',
            ...headers,
        },
        data,
        params,
        timeout: 20000, // 20 seconds
    }
    return axios(config)
        .then(res => {
            return res 
        })
        .catch(async err => {
            // const status = err?.response?.status
            const message = err?.response?.data?.message
            if (message) {
                throw new Error(message)
            }
            throw new Error('Network Error')
        })
}
