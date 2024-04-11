import { Request, Response } from 'express';
import { prisma } from "../../../database";

export default {
    async ContractPut(req: Request, res: Response) {
        try {
            const {
                id,
                porcentagem_reajuste,
                numero_lote,
                hora_sem_orcamento,
                hora_fora_contrato,
                observacao
            } = req.body;

            const contractExist = await prisma.contrato.findFirst({ where: { id } });
            if (!contractExist) {
                return res.json({
                    error: true,
                    message: 'No Contracts Found'
                });
            }

            const contractPut = await prisma.contrato.update({
                where: {
                    id
                },
                data: {
                    porcentagem_reajuste,
                    numero_lote,
                    hora_sem_orcamento,
                    hora_fora_contrato,
                    observacao
                }
            });

            return res.status(200).json({
                error: true,
                message: 'Contract Amendment'
            });
        } catch (e) {
            console.log({ message: e.message });
            return res.status(500).json({
                error: true,
                message: 'Error changing contract'
            });
        }
    }
};
