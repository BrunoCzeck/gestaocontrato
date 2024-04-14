import { Request, Response } from 'express';
import { prisma } from "../../../database";

export default {
    async EstimativaGetId(req: Request, res: Response) {

        const { numero_contrato } = req.body;

        const contractExist = await prisma.estimativa.findMany({ where: { numero_contrato: String(numero_contrato) } });
        if (!!contractExist) {
            return res.status(200).json({
                error: true,
                message: 'Success in getting the contracts',
                contractExist
            });
        } else {    
            return res.status(500).json({
                error: true,
                message: 'Error getting the contracts'
            })
        }
    }
};
