import { Request, Response } from 'express';
import { prisma } from '../../../database';

export default {
    async ContractGetAll(req: Request, res: Response) {
        try {
            const contracts = await prisma.contrato.findMany();

            if (contracts.length === 0) {
                return res.status(404).json({
                    error: true,
                    message: 'No Contracts Found'
                });
            }
            return res.json({
                error: false,
                contracts
            });
        } catch (error) {
            return res.status(500).json({
                error: true,
                message: 'Error getting the contracts'
            });
        }
    }
}
