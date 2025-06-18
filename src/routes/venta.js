import { ventaControllador } from "../controller/venta.js";
import { Router } from "express";

const ventaRouter = Router();

ventaRouter.get("/", ventaControllador.getVenta);
ventaRouter.put("/crearVenta/:id", ventaControllador.putVenta);

export default ventaRouter;
