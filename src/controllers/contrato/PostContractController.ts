import { Request, Response } from 'express';
import { prisma } from '../../../database';
import { v4 as uuidv4 } from 'uuid';

export default {
    async Contract(req: Request, res: Response) {
        try {
            const {
                numero_contrato,
                valor_contrato,
                data_vigencia,
                fornecedor,
                cnpj,
                aditivo,
                cps,
                ata_registro,
                porcentagem_reajuste,
                responsavel_contrato,
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
                    message: 'Contract already registered'
                });
            }
            const contract = await prisma.contrato.create({
                data: {
                    id: id,
                    numero_contrato,
                    valor_contrato,
                    data_vigencia,
                    fornecedor,
                    cnpj,
                    aditivo,
                    cps,
                    ata_registro,
                    porcentagem_reajuste,
                    responsavel_contrato,
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
                message: 'Successfully Registered Contract',
                contract
            })
        } catch (e) {
            console.log({ message: e.message })
        }
    }
}