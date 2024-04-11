import Express from "express";
import PostContractController from "./controllers/contrato/PostContractController";
import PutContractController from "./controllers/contrato/PutContractController";
import GetContractController from "./controllers/contrato/GetContractController";
import DeleteContractController from "./controllers/contrato/DeleteContractController";
import GetContractFornecedorController from "./controllers/contrato/GetContractFornecedorController";
import PostItemController from "./controllers/item/PostItemController";
import PostColaboradorController from "./controllers/colaborador/PostColaboradorController";
import PutColaboradorController from "./controllers/colaborador/PutColaboradorController";

const app = Express();
app.use(Express.json())
const PORT = 8000
/* API Contrato */
app.post('/v1/api/contract', PostContractController.Contract)
app.put('/v1/api/contract', PutContractController.ContractPut)
app.get('/v1/api/contract/:id', GetContractController.ContractGetId)
app.get('/v1/api/contract', GetContractFornecedorController.ContractGetAll)
app.delete('/v1/api/contract', DeleteContractController.DeleteContract)

/* API Item */
app.post('/v1/api/item', PostItemController.Item)

/* API Colaborador */
app.post('/v1/api/colaborador', PostColaboradorController.Colaborador)
app.put('/v1/api/colaborador', PutColaboradorController.PutColaborador)

app.listen(PORT, () => {
    console.log("porta", `${PORT}`)
})