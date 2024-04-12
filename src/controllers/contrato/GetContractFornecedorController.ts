import { Request, Response } from 'express';
import { prisma } from "../../../database";

export default {
    async ContractAll(req: Request, res: Response) {

        const contract = await prisma.contrato.findMany();
        if (!!contract) {
            return res.status(200).json({
                error: true,
                message: 'Success in getting the contracts',
                contract
            });
        } else {    
            return res.status(500).json({
                error: true,
                message: 'Error getting the contracts'
            })
        }
    }
};
