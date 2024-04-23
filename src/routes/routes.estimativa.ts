import { Router } from "express";
import PostEstimativaController from "../controllers/estimativa/PostEstimativaController";
import GetEstimativaController from "../controllers/estimativa/GetEstimativaController";

const estimativa = Router()

estimativa.post('/v1/api/estimativa', PostEstimativaController.Estimativa)
estimativa.get('/v1/api/estimativa', GetEstimativaController.EstimativaGetId)

export { estimativa }