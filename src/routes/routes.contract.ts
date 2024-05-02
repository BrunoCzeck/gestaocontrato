import { Router } from "express";
import PostContractController from "../controllers/contrato/PostContractController";
import PutContractController from "../controllers/contrato/PutContractController";
import GetContractController from "../controllers/contrato/GetContractController";
import GetContractFornecedorController from "../controllers/contrato/GetContractFornecedorController";
import DeleteContractController from "../controllers/contrato/DeleteContractController";
import GetContractERP from "../controllers/contrato/GetContractERP";

const contract = Router()

contract.post('/v1/api/contract', PostContractController.Contract)
contract.put('/v1/api/contract', PutContractController.ContractPut)
contract.get('/v1/api/contract/:id', GetContractController.ContractGetId)
contract.delete('/v1/api/contract', DeleteContractController.DeleteContract)
contract.get('/v2/api/contract', GetContractFornecedorController.ContractAll)
contract.get('/v2/api/erp=:id', GetContractERP.ContractAllERP)

export { contract }