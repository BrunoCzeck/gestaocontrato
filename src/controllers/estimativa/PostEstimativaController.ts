import { Request, Response } from 'express';
import { prisma } from '../../../database';
import { v4 as uuidv4 } from 'uuid';

export default {
    async Estimativa(req: Request, res: Response) {
        try {
            const {
                numero_item,
                titulo_requisito,
                json_perfil,
                numero_contrato,
                valor_total,
                horas,
                observacao } = req.body
            const id = uuidv4();

            const contractExist = await prisma.estimativa.findFirst({ where: { numero_item } })
            if (contractExist) {
                return res.json({
                    error: true,
                    message: 'Estimate already registered'
                });
            }
            const contract = await prisma.estimativa.create({
                data: {
                    id: id,
                    numero_item,
                    titulo_requisito,
                    json_perfil,
                    numero_contrato,
                    valor_total,
                    horas,
                    observacao
                }
            });
            return res.json({
                error: false,
                message: 'Estimate registered successfully',
                contract
            })
        } catch (e) {
            console.log({ message: e.message })
        }
    }
}