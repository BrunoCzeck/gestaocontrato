import Express from "express";
import http from "http"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import compression from "compression"
import cors from "cors"
import { contract } from './routes/routes.contract'
import { colaborador } from "./routes/routes.colaborador";
import { item } from "./routes/routes.item";
import { estimativa } from "./routes/routes.estimativa";

const app = Express();
app.use(Express.json())
const PORT = 8000
app.use(cors({
    credentials: true,
}))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())
const server = http.createServer(app)

/* Routes */
app.use(contract)
app.use(colaborador)
app.use(item)
app.use(estimativa)


server.listen(PORT, () => {
    console.log("Server Start in Port:", `${PORT}`)
})