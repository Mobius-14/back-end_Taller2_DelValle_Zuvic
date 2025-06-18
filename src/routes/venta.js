import { ventaControllador } from "../controller/venta.js";
import { Router } from "express";

const ventaRouter = Router()

ventaRouter.put('/crearVenta/:id', ventaControllador.putVenta)
ventaRouter.get('/ventas', ventaControllador.getVenta)

export default ventaRouter;