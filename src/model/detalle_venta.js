import connection from "../database/db.js";

export class detalle_ventaModel{

    /**
     * Metodo para obtener todos los detalles de las ventas
     * @returns El return consta de que si hay error en la base de datos, se devuelven el estado y el mensaje en formato json.
     * Si existen los datos, se envian los datos. 
     */

    static async getdetalleVenta(){
        try{
            const [data] = await connection.query('SELECT * from detalle_venta where detalleID >= 0')
            return data[0];
        }catch(error){
            return {message: 'Error al obtener los datos',
                estados: false
            }
        }
    }
}