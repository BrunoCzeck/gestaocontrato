import Express from "express";
import PostContractController from "./controllers/contrato/PostContractController";
import PutContractController from "./controllers/contrato/PutContractController";
import GetContractController from "./controllers/contrato/GetContractController";
import GetContractFornecedorController from "./controllers/contrato/GetContractFornecedorController";
import DeleteContractController from "./controllers/contrato/DeleteContractController";
import PostItemController from "./controllers/item/PostItemController";
import PostColaboradorController from "./controllers/colaborador/PostColaboradorController";
import PutColaboradorController from "./controllers/colaborador/PutColaboradorController";
import PostEstimativaController from "./controllers/estimativa/PostEstimativaController";
import GetEstimativaController from "./controllers/estimativa/GetEstimativaController";
import GetItemController from "./controllers/item/GetItemController";

const app = Express();
app.use(Express.json())
const PORT = 8000

/* API Contrato */
app.post('/v1/api/contract', PostContractController.Contract)
app.put('/v1/api/contract', PutContractController.ContractPut)
app.get('/v1/api/contract/:id', GetContractController.ContractGetId)
app.delete('/v1/api/contract', DeleteContractController.DeleteContract)
app.get('/v2/api/contract', GetContractFornecedorController.ContractAll)

/* API Item */
app.post('/v1/api/item', PostItemController.Item)
app.get('/v1/api/item', GetItemController.ItemGetId)

/* API Colaborador */
app.post('/v1/api/colaborador', PostColaboradorController.Colaborador)
app.put('/v1/api/colaborador', PutColaboradorController.PutColaborador)


app.post('/v1/api/estimativa', PostEstimativaController.Estimativa)
app.get('/v1/api/estimativa', GetEstimativaController.EstimativaGetId)


app.listen(PORT, () => {
    console.log("porta", `${PORT}`)
})