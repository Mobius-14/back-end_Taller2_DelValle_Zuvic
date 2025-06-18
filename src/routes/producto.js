import { productoController } from "../controller/producto.js";
import { Router } from "express";

const productoRouter = Router();

productoRouter.get("/", productoController.getProducts);

productoRouter.put("/crear", productoController.postProduct);
productoRouter.patch("/actualizar/:id", productoController.patchProduct);
productoRouter.patch(
  "/eliminarActivar/:id",
  productoController.deleteActiveProducts
);

export default productoRouter;
