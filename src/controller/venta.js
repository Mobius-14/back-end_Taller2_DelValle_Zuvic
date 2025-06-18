import {ventaModel} from '../model/venta.js'
import { id_Cliente_Validator,productoValidate } from '../validator/venta.js';

/**
 * Endpoint para la creación de la venta y detalle venta.
 */
export class ventaControllador{
    static async putVenta(req,res){
            const validatorBody = productoValidate(req.body);
            const validatorParams = id_Cliente_Validator(req.params);
            const errorAray = []
            if( !validatorBody.estado){
                errorAray.push(...validatorBody.error.errors.map(e=>e.message))
            }
            if( !validatorParams.estado){
                errorAray.push(...validatorParams.error.errors.map(e=>e.message))
            }
            if(errorAray.length > 0){
                return res.status(400).json({
                    message: "Datos no válidos",
                    mensaje_error: errorAray
                })
            }
        const data = req.body
        const id_cliente = req.params;
        
        try{
            const {message, estado} = await ventaModel.crearVenta(data,id_cliente);
            if(!estado){
                return res.status(400).json(message)
            }
            return res.status(200).json(message)
        }catch(error){
            return res.status(500).json({message:'Errore en el servidor' + error.message});
        }
        
    }

    /**
     * Endpoint para obtener los detalles de las ventas de la base de datos
     * @param {*} req elemento de express para los requerimiento, se ocuparan par obtener datos
     * @param {*} res Elemento de express para las soluciones, se ocupara para devolver datos y estado de la solicitud. 
     * @returns Retorna datos si existen, si no, retornara mensaje de error.
     */

    static async getVenta(req,res)
    {
        try{
            const {data, message, estado} = await ventaModel.getVenta()
            if(estado === 2|| estado ===3){
                return res.status(estado ===2? 400:500).json(message)
            }
            return res.status(200).json(data)
        }catch(error){
            return res.status(500).json({message:'ERROR en el servidor ' +error.message})
        }
    }
}