import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message?: string
    status?: number
    name?: string
}


const findNearLocation = (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { query } = req
    const { longitude, latitude } = query
    console.log('the data', {
        longitude,
        latitude
    })
    res.status(200).json({ name: 'John Doe' })
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
