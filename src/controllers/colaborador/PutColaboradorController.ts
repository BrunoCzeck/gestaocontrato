import { Request, Response } from 'express';
import { prisma } from "../../../database";

export default {
    async PutColaborador(req: Request, res: Response) {
        try {
            const {
                id,
                perfil,
                colaborador,
                telefone,
                cpf_rg,
                email,
                aprovado,
                numero_contrato
            } = req.body;

            const collaborator = await prisma.colaborador.update({
                where: {
                    id
                },
                data: {
                    perfil,
                    colaborador,
                    telefone,
                    cpf_rg,
                    email,
                    aprovado,
                    numero_contrato
                }
            });

            return res.status(200).json({
                error: true,
                message: 'Changed collaborator',
                collaborator
            });
        } catch (e) {
            return res.status(500).json({
                error: true,
                message: 'Error changing collaborator'
            });
        }
    }
};
