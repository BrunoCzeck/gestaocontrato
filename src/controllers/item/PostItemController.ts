import { Request, Response } from 'express';
import { prisma } from '../../../database';
import { v4 as uuidv4 } from 'uuid';

export default {
    async Item(req: Request, res: Response) {
        try {
            const {
                numero_item,
                perfil,
                quantidade_hora,
                valor_hora,
                numero_contrato } = req.body
            const id = uuidv4();

            const contractExist = await prisma.item.findFirst({ where: { numero_item } })
            if (contractExist) {
                return res.json({
                    error: true,
                    message: 'Item already registered'
                });
            }
            const contract = await prisma.item.create({
                data: {
                    id: id,
                    numero_item,
                    perfil,
                    quantidade_hora,
                    valor_hora,
                    numero_contrato
                }
            });
            return res.json({
                error: false,
                message: 'Item Successfully Registered',
                contract
            })
        } catch (e) {
            console.log({ message: e.message })
        }
    }
}