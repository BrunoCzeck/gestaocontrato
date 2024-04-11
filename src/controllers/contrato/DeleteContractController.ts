import { Request, Response } from 'express';
import { prisma } from '../../../database';

export default {
    async DeleteContract(req: Request, res: Response) {
        const { numero_contrato } = req.body;

        if (!numero_contrato) {
            return res.status(400).json({
                error: true,
                message: 'Contract number not provided in the body of the requisitiono'
            });
        }

        const contract = await prisma.contrato.findFirst({
            where: { numero_contrato }
        });

        if (!contract) {
            return res.status(404).json({
                error: true,
                message: 'No Contracts Found'
            });
        }

        try {
            await prisma.contrato.delete({
                where: {
                    id: contract.id
                }
            });

            return res.json({
                error: false,
                message: 'Successfully deleted contract'
            });
        } catch (error) {
            return res.status(500).json({
                error: true,
                message: 'Error deleted contract'
            });
        }
    }
}
