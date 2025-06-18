import { clientesController } from "../controller/clientes.js";
import { Router } from "express";

const clientesRouter = Router();

clientesRouter.get('/', clientesController.getClientes);

export default clientesRouter;
