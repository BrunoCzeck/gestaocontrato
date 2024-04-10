import Express from "express";
import PostContractController from "./controllers/contrato/PostContractController";
import PutContractController from "./controllers/contrato/PutContractController";

const app = Express();
app.use(Express.json())
const PORT = 8000

app.post('/v1/api/contract', PostContractController.Contract)
app.put('/v1/api/contract', PutContractController.ContractPut)

app.listen(PORT, () => {
    console.log("porta", `${PORT}`)
})