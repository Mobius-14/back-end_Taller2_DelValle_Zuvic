import { detalle_ventaController } from "../controller/detalle_venta.js";
import { Router } from "express";

const detalle_ventaRouter = Router();

detalle_ventaRouter.get("/", detalle_ventaController.getdetalleVenta);

export default detalle_ventaRouter;
