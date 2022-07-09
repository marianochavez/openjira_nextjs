import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.query.id) {
        case '1':
            return res.status(400).json({ message: 'ID no valido' })
        
        case '2':
            return res.status(404).json({ message: 'No se encontró la entrada' })
    
        default:
            return res.status(404).json({ message: 'Endpoint no existe' })
    }    
}