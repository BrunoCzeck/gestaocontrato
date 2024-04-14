import { Request, Response } from 'express';
import { prisma } from "../../../database";

export default {
    async ItemGetId(req: Request, res: Response) {

        const { numero_contrato } = req.body;

        const contractExist = await prisma.item.findMany({ where: { numero_contrato: String(numero_contrato) } });
        if (!!contractExist) {
            return res.status(200).json({
                error: true,
                message: 'Success in getting the Item',
                contractExist
            });
        } else {    
            return res.status(500).json({
                error: true,
                message: 'Error getting the Item'
            })
        }
    }
};
