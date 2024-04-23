import { Router } from "express";
import PostColaboradorController from "../controllers/colaborador/PostColaboradorController";
import PutColaboradorController from "../controllers/colaborador/PutColaboradorController";

const colaborador = Router()

colaborador.post('/v1/api/colaborador', PostColaboradorController.Colaborador)
colaborador.put('/v1/api/colaborador', PutColaboradorController.PutColaborador)

export { colaborador }