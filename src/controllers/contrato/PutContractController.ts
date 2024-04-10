import { Request, Response } from 'express';
import { prisma } from "../../../database"
import { v4 as uuidv4 } from 'uuid';

export default {
    async ContractPut(req: Request, res: Response) {
        try {
            const {
                numero_contrato,
                aditivo, 
                cps,
                ata_registro,
                porcentagem_reajuste,
                numero_edital,
                numero_lote,
                hora_sem_orcamento,
                numero_processo,
                numero_ata,
                hora_fora_contrato,
                observacao } = req.body
                const id = uuidv4();

            const contractExist = await prisma.contrato.findFirst({ where: { numero_contrato } })
            if (contractExist) {
                return res.json({
                    error: true,
                    message: 'Contrato já cadastrado!'
                });
            }
            const contractPut = await prisma.contrato.update({
                where: {
                    id
                },
                data: {
                    aditivo, 
                    cps,
                    ata_registro,
                    porcentagem_reajuste,
                    numero_edital,
                    numero_lote,
                    hora_sem_orcamento,
                    numero_processo,
                    numero_ata,
                    hora_fora_contrato,
                    observacao
                }
            });
            return res.json({
                error: false,
                message: 'Alterado Contrato com Sucesso',
                contractPut
            })
        } catch (e) {
            console.log({ message: e.message })
        }
    }
}