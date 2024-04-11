import { Request, Response } from 'express';
import { prisma } from "../../../database";

export default {
    async ContractGetId(req: Request, res: Response) {

        const { id } = req.params;

        const contractExist = await prisma.contrato.findFirst({ where: { id } });
        if (contractExist) {
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
