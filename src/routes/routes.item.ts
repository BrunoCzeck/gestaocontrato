import { Router } from "express";
import PostItemController from "../controllers/item/PostItemController";
import GetItemController from "../controllers/item/GetItemController";

const item = Router()

item.post('/v1/api/item', PostItemController.Item)
item.get('/v1/api/item', GetItemController.ItemGetId)

export { item }