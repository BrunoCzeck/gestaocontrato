import { Request, Response } from 'express';
import { prisma } from '../../../database';
import { v4 as uuidv4 } from 'uuid';

export default {
    async Colaborador(req: Request, res: Response) {
        try {
            const {
                perfil,
                colaborador,
                telefone,
                cpf_rg,
                email,
                aprovado,
                numero_contrato } = req.body
            const id = uuidv4();

            const contractExist = await prisma.colaborador.findFirst({ where: { cpf_rg } })
            if (contractExist) {
                return res.json({
                    error: true,
                    message: 'Employee already registered'
                });
            }
            const contract = await prisma.colaborador.create({
                data: {
                    id: id,
                    perfil,
                    colaborador,
                    telefone,
                    cpf_rg,
                    email,
                    aprovado,
                    numero_contrato
                }
            });
            return res.json({
                error: false,
                message: 'Successfully registered employee!',
                contract
            })
        } catch (e) {
            console.log({ message: e.message })
        }
    }
}