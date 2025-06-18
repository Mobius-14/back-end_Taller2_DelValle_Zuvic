import connection from "../database/db.js";

export class clientesModel{

    /**
     * Metodo para obtener todos los clientes normales
     * @returns El return consta de que si hay error en la base de datos, se devuelven el estado y el mensaje en formato json.
     * Si existen los datos, se envian los datos. 
     */

    static async getClientesNormales(){
        try{
            const [data] = await connection.query('SELECT * from Clientes where tipo = "Normal";')
            return data[0];            
        }
        catch(error)
        {
            return {message: 'Error al obtener los datos',
                estados: false
            }
        }
    }

    /**
     * Metodo para obtener todos los clientes premium
     * @returns El return consta de que si hay error en la base de datos, se devuelven el estado y el mensaje en formato json.
     * Si existen los datos, se envian los datos. 
     */

    static async getClientesPremium(){
        try{
            const [data] = await connection.query('SELECT * from Clientes where tipo = "Premium";')
            return data[0];            
        }
        catch(error)
        {
            return {message: 'Error al obtener los datos',
                estados: false
            }
        }
    }

    /**
     * Metodo para obtener todos los clientes activos 
     * @returns El return consta de 2 opciones, si no existen datos o hay error en la base de datos, se devuelven el estado y el mensaje en formato json.
     * Si existen los datos, se envia el estado, mensaje y los datos. 
     */

    static async getClientes(){
        try{
            const query= 'SELECT * FROM Clientes WHERE estado = 1'
            const [rows] = await connection.query(query)
            if(rows.length ===0){
                return {
                    estado: 2,
                    message:'No se encontraron datos'
                }
            }
            return {
                estado:1,
                message: 'Se encontraron datos.',
                data: rows
            }
        }catch(error){
            return {
                estado: 3,
                message:'ERROR en la base de datos.'
            }
        }
    }
} 