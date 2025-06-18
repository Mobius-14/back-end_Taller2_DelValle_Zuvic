import { tr } from "@faker-js/faker";
import { detalle_ventaModel } from "../model/detalle_venta.js";

export class detalle_ventaController{
    /**
     * Endpoint para obtener los detalles de las ventas de la base de datos
     * @param {*} req elemento de express para los requerimiento, se ocuparan par obtener datos
     * @param {*} res Elemento de express para las soluciones, se ocupara para devolver datos y estado de la solicitud. 
     * @returns Retorna datos si existen, si no, retornara mensaje de error.
     */
    static async getdetalleVenta(req,res)
    {
        try{
            const {data, message, estado} = await detalle_ventaModel.getdetalleVenta()
            if(estado === 2|| estado ===3){
                return res.status(estado ===2? 400:500).json(message)
            }
            return res.status(200).json(data)
        }catch(erro){
            return res.status(500).json({message:'ERROR en el servidor ' +error.message})
        }
    }
}