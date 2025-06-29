import express from 'express'
import connection from './database/db.js'
import {seederCliente,seederProducto} from './database/seeder.js'
import productoRouter from './routes/producto.js'
import ventaRouter from './routes/venta.js'
import clientesRouter from './routes/clientes.js'
import detalle_ventaRouter from './routes/detalle_venta.js'

const PORT = 3001

import cors from "cors";

const app = express();
app.use(cors());
/*
Middelware que nos permite utilizar el formato json en la api.
*/
app.use(express.json())
/*
Función para ejecutar el seeder correspondiente.
*/
 async function seederEJ (){
    const result = await seederProducto()
    const result2 = await seederCliente()
    console.log(result.message + ' ' + result2.message)
 }
 seederEJ()
/* 
 Middelwares que nos redirige hacia las rutas de producto con la sub ruta de /productos
*/
 app.use('/producto',productoRouter)
 app.use('/venta', ventaRouter)
 app.use('/clientes', clientesRouter)
 app.use('/detalle_venta', detalle_ventaRouter)

process.on('SIGINT', async()=>{
    console.log("Cerrando")
    await connection.end();
    process.exit(0)
})
app.listen(PORT,()=>{
    console.log("http://localhost:3001/")
})