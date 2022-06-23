import haversine from 'haversine-distance'
import type { NextApiRequest, NextApiResponse } from 'next'
import states from "../../../states.json"

type Data = {
    message?: string
    status?: number
    name?: string
    nearestLocation?:any
}


const findNearLocation = (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { query } = req
    const { longitude, latitude } = query
    console.log('the data', {
        longitude,
        latitude,
        states
    })
    const distance = states.map(state => {
        return haversine({ lat: parseInt(String(latitude), 10), lng: parseInt(String(longitude), 10) }, { lat: state.latitude, lng: state.longitude })
    })
    const closest = Math.min(...distance) 
    const closestLocationIndex = distance.indexOf(closest)
        const nearestLocation = states[closestLocationIndex]

    console.log('the distance & closest', {
        closest,
        distance,
        closestLocationIndex,
        nearestLocation
    });
    
    res.status(200).json({ nearestLocation })
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    switch (req.method) {
        case "GET": 
            findNearLocation(req, res)
            break
        default: 
            res.status(404).json({
                status: 404,
                message: "Not Found"
            })
  }
}
