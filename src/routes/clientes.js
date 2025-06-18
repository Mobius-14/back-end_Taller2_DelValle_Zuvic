import { clientesController } from "../controller/clientes.js";
import { Router } from "express";

const clientesRouter = Router()

clientesRouter.get('/clientes', clientesController.getClientes)

export default clientesRouter;