import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import { Entry, IEntry } from '../../../models';

type Data =
    | { message: string }
    | IEntry

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    const { id } = req.query;
    
    switch (req.method) {
        case 'GET':
            return getEntry(res, id as string);

        case 'PUT':
            return updateEntry(req, res, id as string);

        default:
            return res.status(400).json({ message: 'Endpoint no existe' });
    }

}

const getEntry = async (res: NextApiResponse<Data>, id: string) => {
    await db.connect();

    const entry = await Entry.findById(id);

    await db.disconnect();

    if (!entry) {
        return res.status(404).json({ message: 'No se encontró la entrada' });
    }

    res.status(200).json(entry);
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>, id: string) => {
    await db.connect();

    const entryToUpdate = await Entry.findById(id);

    if (!entryToUpdate) {
        await db.disconnect();
        return res.status(404).json({ message: 'No se encontró la entrada' });
    }

    const {
        description = entryToUpdate.description,
        status = entryToUpdate.status
    } = req.body;


    // entryToUpdate.description = description;
    // entryToUpdate.status = status;
    // await entryToUpdate.save(); // otro metodo para actualizar

    try {
        const updatedEntry = await Entry.findByIdAndUpdate(id, {
            description,
            status,
        }, { runValidators: true, new: true });

        await db.disconnect();

        res.status(200).json(updatedEntry!);
    } catch (error: any) {
        await db.disconnect();
        res.status(400).json({ message: error.errors.status.message });
    }


}
